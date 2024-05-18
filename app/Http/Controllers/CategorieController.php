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
}
