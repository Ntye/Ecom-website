<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use Illuminate\Http\Request;
use App\Models\Produit;

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


    public function destroy($idCat)
    {
        
        $categorie = Categorie::where('idCat', $idCat)->first();
        if (!$categorie) {
            return response()->json(['message' => 'No categorie found for the specified idCat'], 404);
        }
       
        Produit::where('idCategorie', $idCat)->delete();

        $categorie->delete();

        // Retourner une réponse de succès
        return response()->json(['message' => 'Category supprimé avec succès']);
    } 



    public function update(Request $request, $idCat){
        $categorie = Categorie::findOrFail($idCat);
        $validatedData = $request->validate([
            'idCat' => 'sometimes',
            'nomCat' => 'sometimes',
        ]);
        $categorie->update($validatedData);
        return response()->json(['message' => 'categorie modified successfully'], 201);
    }
}
