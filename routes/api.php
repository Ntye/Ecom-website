<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\VilleController;
use App\Http\Controllers\ProduitController;
use App\Http\Controllers\ClientController;
use \App\Http\Controllers\PhotoController;
use \App\Http\Controllers\CategorieController;

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
Route::get('/by-category/{idCat}', [CategorieController::class, 'productsByCategory']);

//On Product Table
Route::post('/new-product', [ProduitController::class, 'store']);
Route::get('/all-products', [ProduitController::class, 'index']);
Route::get('/products/{codePro}', [ProduitController::class, 'show']);
Route::get('/products-by-category/{idCat}', [ProduitController::class, 'products_by_category']);
Route::get('/search', [ProduitController::class, 'search']);

//On Photo Table
Route::post('/upload', [PhotoController::class, 'store']);
Route::get('/photos', [PhotoController::class, 'index']);
Route::get('/product-pictures/{codePro}', [PhotoController::class, 'photos_by_product']);
