<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\VilleController;
use App\Http\Controllers\ProduitController;
use App\Http\Controllers\ClientController;
use \App\Http\Controllers\PhotoController;
use \App\Http\Controllers\CategorieController;
use \App\Http\Controllers\LigneCommandeController;
use \App\Http\Controllers\CommandeController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//On City Table
Route::get('/cities', [VilleController::class, 'index']);

//On Client Table
Route::post('/sign-in', [ClientController::class, 'signin']);
Route::post('/login', [ClientController::class, 'login']);


//On Categorie Table
Route::get('/categories', [CategorieController::class, 'items']);
Route::get('/category/{idCat}', [CategorieController::class, 'show']);
Route::get('/class/{idCatPrefix}', [CategorieController::class, 'sub_category']);

//On Product Table
Route::post('/new-product', [ProduitController::class, 'store']);
Route::get('/all-products', [ProduitController::class, 'index']);
Route::get('/products/{codePro}', [ProduitController::class, 'show']);
Route::get('/product/{codePro}', [ProduitController::class, 'showonly']);
Route::get('/products-by-category/{idCat}', [ProduitController::class, 'products_by_category']);
Route::post('/search', [ProduitController::class, 'search']);

//On Photo Table
Route::post('/upload', [PhotoController::class, 'store']);
Route::get('/photos', [PhotoController::class, 'index']);
Route::get('/product-pictures/{codePro}', [PhotoController::class, 'photos_by_product']);

//On LigneCommande Table
Route::post('/l-commande/save', [LigneCommandeController::class, 'save']);
Route::post('/l-commande/search', [LigneCommandeController::class, 'search']);
Route::post('/l-commande/client', [LigneCommandeController::class, 'get_one']);

//On Commande Table
Route::post('/commande/save', [CommandeController::class, 'save']);
Route::post('/commande/search', [CommandeController::class, 'search']);
//Route::get('/commande/{nomClient}', [CommandeController::class, 'search']);
