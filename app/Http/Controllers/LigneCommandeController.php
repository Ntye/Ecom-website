<?php

namespace App\Http\Controllers;

use App\Models\LigneCommande;
use Illuminate\Http\Request;
use Psy\Util\Str;

class LigneCommandeController extends Controller
{
    public function get_one(Request $request)
    {
        $validatedData = $request->validate([
            'codePro' => 'required',
        ]);

        $commandes = LigneCommande::where('codePro', $validatedData['codePro'])->get();

        if ($commandes->isEmpty()) {
            return response()->json(['message' => 'No photos found for the specified codePro'], 404);
        }

        return $commandes;
    }

    public function search(Request $request)
    {
        $validatedData = $request->validate([
            'idCommande' => 'required',
        ]);

        $commande = LigneCommande::where('idCommande', $validatedData['idCommande'])->first();

        if (!$commande) {
            return response()->json(['message' => 'No photos found for the specified codePro'], 404);
        }

        $produitController = new ProduitController();
        $let = $produitController->showonly($commande->codePro);

        $transformedCommande = [
            'idCommande' => $commande->idCommande,
            'codePro' => $commande->codePro,
            'quantite' => $commande->quantite,
            'taille' => $commande->taille,
            'couleur' => asset($commande->couleur),
            'disponible' => $commande->disponible,
            'nomPro' => $let->nomPro,
            'qtyMax' => $let->qte,
            'description' => $let->description,
        ];

        return $transformedCommande;
    }

    public function save(Request $request)
    {
        $validatedData = $request->validate([
            'idCommande' => 'required',
            'codePro' => 'required',
            'quantite' => 'required',
            'taille' => '',
            'couleur' => 'required',
            'disponible' => '',
        ]);

        // Create a new client instance
        $baseUrl = asset('');

        $ligneCom = new LigneCommande();
        $ligneCom->idCommande = $validatedData['idCommande'];
        $ligneCom->codePro = $validatedData['codePro'];
        $ligneCom->quantite = $validatedData['quantite'];
        $ligneCom->taille = $validatedData['taille'] ?? "";
        $ligneCom->couleur = str_replace($baseUrl, '', $validatedData['couleur']);
        $ligneCom->disponible = $validatedData['disponible'] ?? 0;

        // Save the client to the database
        $ligneCom->save();

        // Return a response indicating success
        return response()->json(['message' => 'command inserted successfully'], 201);
    }
}
