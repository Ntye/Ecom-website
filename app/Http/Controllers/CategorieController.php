<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use Illuminate\Http\Request;

class CategorieController extends Controller
{
    public function items()
    {
        $categories = Categorie::all();
        return response()->json($categories);
    }

    public function show($idCat)
    {
        // Retrieve the product with the specified codePro from the database
        $categorie = Categorie::where('idCat', $idCat)->first();

        // Check if the product exists
        if ($categorie) {
//            'items' => $items, 'categories' => $categories
            return response()->json(['categorie' => $categorie]);
        } else {
            // Return a not found response if the product does not exist
            return response()->json(['message' => 'Product not found'], 404);
        }
    }
}
