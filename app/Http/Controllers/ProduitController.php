<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
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

//    public function search(Request $request)
//    {
//        $nomPro = $request->input('nomPro');
//
//        // Validate the input
//        $request->validate([
//            'nomPro' => 'required|min:3',
//        ]);
//
//        // Perform the search
//        $products = Produit::where('nomPro', 'LIKE', "%{$nomPro}%")->get();
//
//        // Return the search results to the view
//        return response()->json(['items' => $products], 201);
//    }

    public function search(Request $request)
    {
        $query = $request->input('query');
        $categoryId = $request->input('category_id');
        $minPrice = $request->input('min_price');
        $maxPrice = $request->input('max_price');

        // Validate the input
        $request->validate([
            'query' => 'nullable|string|min:3',
            'category_id' => 'nullable|exists:categories,id',
            'min_price' => 'nullable|numeric|min:0',
            'max_price' => 'nullable|numeric|min:0',
        ]);

        // Perform the search
        $items = Produit::query()
            ->when($query, function ($queryBuilder, $query) {
                return $queryBuilder->where('nomPro', 'LIKE', "%{$query}%");
            })
            ->when($categoryId, function ($queryBuilder, $categoryId) {
                return $queryBuilder->where('idCategorie', $categoryId);
            })
            ->when($minPrice, function ($queryBuilder, $minPrice) {
                return $queryBuilder->where('price', '>=', $minPrice);
            })
            ->when($maxPrice, function ($queryBuilder, $maxPrice) {
                return $queryBuilder->where('price', '<=', $maxPrice);
            })
            ->get();

        // Fetch all categories for the dropdown
        $categories = Categorie::all();

        // Return the search results
        return response()->json(['items' => $items, 'categories' => $categories]);
    }
}
