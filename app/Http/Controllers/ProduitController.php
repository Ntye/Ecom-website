<?php

namespace App\Http\Controllers;

use App\Models\Produit;
use Illuminate\Http\Request;

class ProduitController extends Controller
{
    public function index()
    {
        // Retrieve all products from the database
        $products = Produit::all();

        // Return the products as JSON response
        return response()->json($products);
    }

    public function show($codePro)
    {
        // Retrieve the product with the specified codePro from the database
        $product = Produit::where('codePro', $codePro)->first();

        // Check if the product exists
        if ($product) {
            // Return the product as a JSON response
            return response()->json($product);
        } else {
            // Return a not found response if the product does not exist
            return response()->json(['message' => 'Product not found'], 404);
        }
    }

    public function store(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'codePro' => 'required',
            'idCategorie' => 'required',
            'nomPro' => '',
            'prixAchat' => 'required',
            'qte' => 'required',
            'description' => 'required',
            'dateInsertion' => '',
            'prix' => '',
            'codeArrivage' => '',
            'actif' => '',
            'pourcentage' => 'required',
            'promo' => '',
        ]);

        // Create a new produit instance
        $produit = new Produit();
        $produit->codePro = $validatedData['codePro'];
        $produit->idCategorie = $validatedData['idCategorie'];
        $produit->nomPro = $validatedData['nomPro'];
        $produit->prixAchat = $validatedData['prixAchat'];
        $produit->qte = $validatedData['qte'];
        $produit->description = $validatedData['description'];
        $produit->dateInsertion = date('Y-m-d');
        $produit->pourcentage = $validatedData['pourcentage'];
        $produit->prix = ceil($produit->prixAchat * (1 + $produit->pourcentage) / 100) * 100;
        $produit->actif = 1;
        $produit->codeArrivage = "09";
        $produit->promo = 0;

        // Save the produit to the database
        $produit->save();

        // Return a response indicating success
        return response()->json(['message' => 'produit inserted successfully'], 201);
    }
}
