<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use App\Models\Gestionnaire;

class GestionnaireController extends Controller
{
    public function signup(Request $request)
    {
    // idGest	nomGest	typeGest	login	pwd	actif	mobile
        // Validate the incoming request data
        $validatedData = $request->validate([
            'idGest' => '',
            'nomGest' => 'required',
            'typeGest' => 'required',
            'login' => 'required',
            'pwd' => 'required',
            'actif' => '',
            'mobile' => 'required',
        ]);

        $gestionnaireExists = Gestionnaire::where('login', $validatedData['login'])->first();

        if ($gestionnaireExists) {
            return response()->json(['message' => 'employee already exists'], 404);
        } else {
            // Create a new Gestionnaire instance
            $gestionnaire = new Gestionnaire();
            $gestionnaire->login = $validatedData['login'];
            $gestionnaire->nomGest = $validatedData['nomGest'];
            $gestionnaire->typeGest = $validatedData['typeGest'];
            $gestionnaire->mobile = $validatedData['mobile'];
            $gestionnaire->pwd = Hash::make($validatedData['pwd']);
            $gestionnaire->actif = 0;

            // Save the Gestionnaire to the database
            $gestionnaire->save();

            // Return a response indicating success
            return response()->json(['message' => 'Employee inserted successfully'], 201);
        }
    }


    public function login(Request $request)
    {
        $validatedData = $request->validate([
            'login' => 'required',
            'pwd' => 'required',
            'typeGest' => 'required',
        ]);
        // Retrieve the clients with the specified idGest from the database
        $gestionnaire = Gestionnaire::where('login', $validatedData['login'])->first();

        // Check if the clients exists
        if ($gestionnaire) {
            if ( Hash::check($validatedData['pwd'], $gestionnaire->pwd) ) {
                return response()->json(['message' => 'Login Succesful'], 201);
            }
            return response()->json(['message' => 'Incorrect Password'], 404);
        } else {
            // Return a not found response if the client does not exist
            return response()->json(['message' => 'Not Found'], 404);
        }
    }

    public function destroy($idGest)
    {
         
        $gestionnaire = Gestionnaire::where('idGest', $idGest)->first();
        if (!$gestionnaire) {
            return response()->json(['message' => 'No employee found for the specified idGest'], 404);
        }
        $gestionnaire->delete();
        // Retourner une réponse de succès
        return response()->json(['message' => 'Employe supprimé avec succès']);
    }



    public function update(Request $request, $idGest){
        $gestionnaire = Gestionnaire::findOrFail($idGest);
        $validatedData = $request->validate([
            'idGest' => 'sometimes',
            'nomGest' => 'sometimes',
            'typeGest' => 'sometimes',
            'login' => 'sometimes',
            'pwd' => 'sometimes',
            'actif' => 'sometimes',
            'mobile' => 'sometimes',
        ]);
        $gestionnaire->update($validatedData);
        return response()->json(['message' => 'gestionnaire modified successfully'], 201);
    }



    
}
