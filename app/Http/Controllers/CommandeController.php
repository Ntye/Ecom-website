<?php

namespace App\Http\Controllers;

use App\Models\Commande;
use App\Models\LigneCommande;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CommandeController extends Controller
{

    public function search(Request $request)
    {
        $validatedData = $request->validate([
            'nomClient' => 'required',
        ]);

        $commandes = Commande::where('nomClient', $validatedData['nomClient'])->where('livrer', 0)->get();


        if (!$commandes) {
            return response()->json(['message' => 'No commands found for the specified codePro'], 400);
        }

        $ligneComController = new LigneCommandeController();

        $request = new Request();


        $transformedCommand = $commandes->map(function ($commande) use ($ligneComController, $request) {
            $request->merge(['idCommande' => $commande->idCommande]);

            $let = $ligneComController->search($request);
            return [
                'dateCom' => $commande->dateCom,
                'montant' => $commande->montant,
                'nomClient' => $commande->nomClient,
                'product' => $let,
                'idCommande' => $commande->idCommande,

            ];
        });
//
//        return response()->json($transformedPhotos);
//        return $commandes;
        //return response()->json(["commandes"=> $transformedPhotos, "nomClient"=> $validatedData['nomClient']], 200);
    }

    public function save(Request $request)
    {
        $validatedData = $request->validate([
            'dateCom' => '',
            'montant' => 'required',
            'nomClient' => 'required',
            'mobile' => '',
            'adresse' => '',
            'livrer' => '',
            'avance' => '',
            'remise' => '',
            'type' => '',
            'idVille' => '',
            'commentaire' => '',
            'codePro' => 'required',
            'quantite' => 'required',
            'taille' => '',
            'couleur' => 'required',
            'disponible' => '',
        ]);

        $latestId = Commande::max('idCommande');
        $newIdCommande = $latestId ? $latestId + 1 : 1;



        // Create a new client instance
        $commande = new Commande();
        $commande->idCommande = $newIdCommande;
        $commande->dateCom = date('Y-m-d');
        $commande->montant = $validatedData['montant'];
        $commande->nomClient = $validatedData['nomClient'];
        $commande->mobile = $validatedData['mobile'] ?? 0;
        $commande->adresse = $validatedData['adresse'] ?? "";
        $commande->livrer = $validatedData['livrer'] ?? 0;
        $commande->avance = $validatedData['avance'] ?? 0;
        $commande->remise = $validatedData['remise'] ?? 0;
        $commande->type = $validatedData['type'] ?? 0;
        $commande->idVille = $validatedData['idVille'] ?? 1;
        $commande->commentaire = $validatedData['commentaire'] ?? "";

        $commande->save();

        $ligneComController = new LigneCommandeController();
        $request->merge(['idCommande' => $commande->idCommande]);
        $ligneComController->save($request);

        // Return a response indicating success
        return response()->json(['message' => 'commande inserted successfully', $commande->idCommande], 201);


    }

    public function deleteAll($idCommande){

        $ligneCommandeController = new LigneCommandeController();
        $ligneCommandes = LigneCommande::where('idCommande', $idCommande)->get();

        foreach ($ligneCommandes as $ligneCommande) {
            $ligneCommandeController->deleteAll($ligneCommande->idCommande);
        }
        $commande =  Commande::where('idCommande', $idCommande)->delete();
        if($commande){
            return response()->json(['message' => 'command modified successfully'], 201);
        }
        return response()->json(['message' => 'Error'], 404);

    }


    public function updateCommande(Request $request, $idCommande) : jsonResponse{
        $commande = Commande::findOrFail($idCommande);
        $validatedData = $request->validate([
            'dateCom' => 'sometimes',
            'montant' => 'sometimes',
            'nomClient' => 'sometimes',
            'mobile' => 'sometimes',
            'adresse' => 'sometimes',
            'livrer' => 'sometimes',
            'avance' => 'sometimes',
            'remise' => 'sometimes',
            'type' => 'sometimes',
            'idVille' => 'sometimes',
            'commentaire' => 'sometimes',
            'codePro' => 'sometimes',
            'quantite' => 'sometimes',
            'taille' => 'sometimes',
            'couleur' => 'sometimes',
            'disponible' => 'sometimes',
        ]);
        $commande->update($validatedData);
        return response()->json(['message' => 'command modified successfully'], 201);
    }

}
