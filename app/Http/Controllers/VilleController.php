<?php

namespace App\Http\Controllers;

use App\Models\Ville;
use Illuminate\Http\Request;

class VilleController extends Controller
{
    public function index()
    {
        // Retrieve all cities from the database
        $villes = Ville::all();

        // Return the cities as JSON response
        return response()->json($villes);
    }
}
