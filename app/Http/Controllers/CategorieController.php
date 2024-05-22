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
        $categorie = Categorie::where('idCat', $idCat)->first();

        if ($categorie) {
            return response()->json(['categorie' => $categorie]);
        } else {
            return response()->json(['message' => 'Product not found'], 404);
        }
    }

    public function sub_category($idCatPrefix)
    {
        $categories = Categorie::where('idCat', 'LIKE', $idCatPrefix . '%')->get();

        if ($categories->isNotEmpty()) {
            return response()->json(['categories' => $categories]);
        } else {
            return response()->json(['message' => 'No categories found'], 404);
        }
    }
}
