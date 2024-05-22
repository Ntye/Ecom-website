<?php

namespace App\Http\Controllers;

use App\Models\Commande;
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
            return response()->json(['message' => 'No photos found for the specified codePro'], 400);
        }

        $ligneComController = new LigneCommandeController();

        $request = new Request();


        $transformedPhotos = $commandes->map(function ($commande) use ($ligneComController, $request) {
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
        return response()->json(["commandes"=> $transformedPhotos, "nomClient"=> $validatedData['nomClient']], 200);
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
}
