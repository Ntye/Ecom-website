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

    public function showonly($codePro)
    {
        $product = Produit::where('codePro', $codePro)->first();

        if ($product) {
            return $product;
        } else {
            // Return a not found response if the product does not exist
            return response()->json(['message' => 'Product not found'], 404);
        }
    }


    public function show($codePro)
    {
        // Retrieve the product with the specified codePro from the database
        $product = Produit::where('codePro', $codePro)->first();

        // Check if the product exists
        if ($product) {
            // Return the product as a JSON response
            $pictureController = new PhotoController();
            $photos = $pictureController->photos_by_product($product->codePro);

//            'items' => $items, 'categories' => $categories
            return response()->json(['product' => $product, 'photos' => $photos]);
        } else {
            // Return a not found response if the product does not exist
            return response()->json(['message' => 'Product not found'], 404);
        }
    }

    public function store(Request $request)
    {
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

        $produit->save();

        return response()->json(['message' => 'produit inserted successfully'], 201);
    }

    

    public function products_by_category($idCategorie) {
        $products = Produit::where('idCategorie', $idCategorie)->get();

        if ($products->isEmpty()) {
            return response()->json(['message' => 'No pro found for the specified codePro'], 404);
        }


        $pictureController = new PhotoController();

        $transformedPhotos = $products->map(function ($product) use ($pictureController) {
            return [
                'codePro' => $product->codePro,
                'idCategorie' => $product->idCategorie,
                'nomPro' => $product->nomPro,
                'prix' => $product->prix,
                'qte' => $product->qte,
                'description' => $product->description,
                'pictures' => $pictureController->photos_by_product($product->codePro)
            ];
        });

        return response()->json($transformedPhotos);
    }



    public function destroy($codePro)
    {
         
        $produit = Produit::where('codePro', $codePro)->first();
        if (!$produit) {
            return response()->json(['message' => 'No pro found for the specified codePro'], 404);
        }
        $produit->delete();
        // Retourner une réponse de succès
        return response()->json(['message' => 'Produit supprimé avec succès']);
    }



    public function update(Request $request, $codePro){
        $produit = Produit::findOrFail($codePro);
        $validatedData = $request->validate([
            'codePro' => 'sometimes',
            'idCategorie' => 'sometimes',
            'nomPro' => 'sometimes',
            'prixAchat' => 'sometimes',
            'qte' => 'sometimes',
            'description' => 'sometimes',
            'dateInsertion' => 'sometimes',
            'prix' => 'sometimes',
            'codeArrivage' => 'sometimes',
            'actif' => 'sometimes',
            'pourcentage' => 'sometimes',
            'promo' => 'sometimes',
        ]);
        $produit->update($validatedData);
        return response()->json(['message' => 'produit modified successfully'], 201);
    }

    public function deleteAll($idCategorie){

       $pictureController = new PhotoController();
       $products = Produit::where('idCategorie', $idCategorie)->get();


       foreach ($products as $product) {
           $pictureController->deleteAll($product->codePro);
           $product->delete();
        }

        return Produit::where('idCategorie', $idCategorie)->delete();
    }
}
