<?php

use App\Http\Controllers\FactureController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\VilleController;
use App\Http\Controllers\ProduitController;
use App\Http\Controllers\ClientController;
use \App\Http\Controllers\PhotoController;
use \App\Http\Controllers\CategorieController;
use \App\Http\Controllers\LigneCommandeController;
use \App\Http\Controllers\CommandeController;
use \App\Http\Controllers\GestionnaireController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//On City Table
Route::get('/cities', [VilleController::class, 'index']);


//On Client Table
Route::post('/sign-in', [ClientController::class, 'signin']);
Route::post('/login', [ClientController::class, 'login']);
Route::delete('/client/{matr}', [ClientController::class, 'destroy']);
Route::put('/client/{matr}', [ClientController::class, 'update']);


//On Categorie Table
Route::get('/categories', [CategorieController::class, 'items']);
Route::get('/category/{idCat}', [CategorieController::class, 'show']);
Route::get('/class/{idCatPrefix}', [CategorieController::class, 'sub_category']);
Route::delete('/category/{idCat}', [CategorieController::class, 'destroy']);
Route::put('/category/{idCat}', [CategorieController::class, 'update']);


//On Product Tablcategory
Route::post('/new-product', [ProduitController::class, 'store']);
Route::get('/all-products', [ProduitController::class, 'index']);
Route::get('/products/{codePro}', [ProduitController::class, 'show']);
Route::get('/product/{codePro}', [ProduitController::class, 'showonly']);
Route::get('/products-by-category/{idCat}', [ProduitController::class, 'products_by_category']);
Route::post('/search', [ProduitController::class, 'search']);
Route::delete('/produits/{codePro}', [ProduitController::class, 'destroy']);
Route::put('/produits/{codePro}', [ProduitController::class, 'update']);

//On Photo Table
Route::post('/upload', [PhotoController::class, 'store']);
Route::get('/photos', [PhotoController::class, 'index']);
Route::get('/product-pictures/{codePro}', [PhotoController::class, 'photos_by_product']);

//On LigneCommande Table
Route::post('/l-commande/save', [LigneCommandeController::class, 'save']);
Route::post('/l-commande/search', [LigneCommandeController::class, 'search']);
Route::post('/l-commande/client', [LigneCommandeController::class, 'get_one']);
route::delete('/l-commande/{idLignCom}', [LigneCommandeController::class, 'deleteAll']);
Route::put('/l-commande/{ligneCommande}', [LigneCommandeController::class, 'updateLigneCom']);


//On Commande Table
Route::post('/commande/save', [CommandeController::class, 'save']);
Route::post('/commande/search', [CommandeController::class, 'search']);
Route::delete('/commande/{idCommande}', [CommandeController::class, 'deleteAll']);
Route::put('/commande/{idCommande}', [CommandeController::class, 'updateCommande']);

//Route::get('/commande/{nomClient}', [CommandeController::class, 'search']);


//On Gestionnaire Table
Route::post('/gestionnaire/singup', [GestionnaireController::class, 'signup']);
Route::post('/gestionnaire/login', [GestionnaireController::class, 'login']);
Route::delete('/gestionnaire/{idGest}', [GestionnaireController::class, 'destroy']);
Route::put('/gestionnaire/{idGest}', [GestionnaireController::class, 'update']);


//On Facture table
Route::post('/facture/createF', [FactureController::class, 'createF']);
Route::delete('/facture/{idFacture}', [FactureController::class, 'deleteAll']);
Route::put('/facture/{facture}', [FactureController::class, 'updateF']);


