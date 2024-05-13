<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ClientController extends Controller
{
    public function index()
    {
        // Retrieve all clients from the database
        $clients = Client::all();

        // Return the clients as JSON response
        return response()->json($clients);
    }

    public function login(Request $request)
    {
        $validatedData = $request->validate([
            'user' => 'required',
            'pwd' => 'required',
        ]);
        // Retrieve the clients with the specified codePro from the database
        $client = Client::where('user', $validatedData['user'])->first();

        // Check if the clients exists
        if ($client) {
            if ( Hash::check($validatedData['pwd'], $client->pwd) ) {
                return response()->json(['message' => 'Login Succesful'], 201);
            }
            return response()->json(['message' => 'Incorrect Password'], 404);
        } else {
            // Return a not found response if the client does not exist
            return response()->json(['message' => 'Not Found'], 404);
        }
    }

    public function signin(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'matr' => '',
            'nom' => 'required',
            'sexe' => 'required',
            'dateNaiss' => 'required',
            'idVille' => 'required',
            'mobile' => 'required',
            'creation' => '',
            'point' => '',
            'montantTontine' => '',
            'user' => '',
            'typeChat' => '',
            'pwd' => 'required',
            'chatID' => '',
        ]);

        $clientexists = Client::where('user', $validatedData['user'])->first();

        if ($clientexists) {
            return response()->json(['message' => 'Username already exists'], 404);
        } else {
            // Create a new client instance
            $client = new Client();
            $client->nom = $validatedData['nom'];
            $client->sexe = $validatedData['sexe'];
            $client->dateNaiss = $validatedData['dateNaiss'];
            $client->idVille = $validatedData['idVille'];
            $client->mobile = $validatedData['mobile'];
            $client->creation = date('Y-m-d');
            $client->point = 0;
            $client->montantTontine = 0;
            $client->user = $validatedData['user'];
            $client->typeChat = 0;
            $client->pwd = Hash::make($validatedData['pwd']);
            $client->chatID = 0;

            // Save the client to the database
            $client->save();

            // Return a response indicating success
            return response()->json(['message' => 'client inserted successfully'], 201);
        }


    }
}
