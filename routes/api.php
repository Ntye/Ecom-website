<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\VilleController;
use App\Http\Controllers\ProduitController;
use App\Http\Controllers\ClientController;
use \App\Http\Controllers\PhotoController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//On City Table
Route::get('/cities', [VilleController::class, 'index']);

//On Client Table
Route::post('/sign-in', [ClientController::class, 'signin']);
Route::post('/login', [ClientController::class, 'login']);

//On Product Table
Route::post('/new-product', [ProduitController::class, 'store']);
Route::get('/all-products', [ProduitController::class, 'index']);
Route::get('/products/{codePro}', [ProduitController::class, 'show']);

//On Photo Table
Route::post('/upload', [PhotoController::class, 'store']);
Route::get('/photos', [PhotoController::class, 'index']);