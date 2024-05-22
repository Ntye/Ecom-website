<?php

namespace App\Http\Controllers;

use App\Models\Facture;
use App\Models\LigneFacture;
//use App\Http\Controllers\GestionnaireController;
use Exception;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class FactureController extends Controller
{
    public function createF(Request $request): JsonResponse
    {
        $validatedData = $request->validate(
            [
                'idFac' => '',
                'dateFac' => 'required',
                'reparation' => 'required',
                'montant' => 'required',
                'tel' => 'required',
                'typeFac' => 'required',
                'idCaissiere' => 'required',
                'capital' => '',
                'codePromo' => '',
                'TVA' => 'required'
            ]);

          $cashier = new GestionnaireController();

        if ($cashier->isCashier($validatedData['idCaissiere'])){
            $facture = new Facture();

            // $facture -> idFac = $validatedData['idFac'];
            $facture -> dateFac = $validatedData['dateFac'];          //date('Y-m-d');
            $facture -> montant = $validatedData['montant'];
            $facture -> tel = $validatedData['tel'];
            $facture -> typeFac = $validatedData['typeFac'];
            $facture -> idCaissiere = $validatedData['idCaissiere'];
            $facture -> capital = 0.0;       //$validatedData['capital'];
            $facture -> codePromo = 0;         //$validatedData['codePromo'];
            $facture -> TVA = $validatedData['TVA'];
          //  dd($facture);
            try {
                $facture->save();
                return response()->json(['message' => 'Facture created successfully'], 201);
            } catch (Exception $e) {
                return response()->json(['error' => $e->getMessage()], 500);
            }

        }
        else {
            return response()->json(['message' => 'L identifiant fourni n est pas celui d une caissiere'], 404);
        }



       // dd($facture);

        //$facture->save();
        //

    }

    public function updateF(Request $request, Facture $facture) : JsonResponse
    {
        $validatedData = $request->validate([
            'idFac' => 'sometimes',
            'dateFac' => 'current_time',
            'reparation' => 'sometimes',
            'montant' => 'sometimes',
            'tel' => 'sometimes',
            'typeFac' => 'sometimes',
            'capital' => 'sometimes',
            'codePromo' => 'sometimes',
            'TVA' => 'sometimes'
        ]);

        $facture -> dateFac = $validatedData['dateFac'];
        $facture -> montant = $validatedData['montant'];
        $facture -> tel = $validatedData['tel'];
        $facture -> typeFac = $validatedData['typeFac'];
        $facture -> capital = $validatedData['capital'];
        $facture -> codePromo = $validatedData['codePromo'];
        $facture -> TVA = $validatedData['TVA'];

        if($facture->save()) {
            return response()->json(['message' => 'facture modified successfully'], 201);
        }
        return response()->json(['message' => 'Error'], 404);

    }

    public function deleteAll($idFacture): JsonResponse
    {

        $ligneFactureController = new LigneFactureController();
        $ligneFactures = LigneFacture::where('idFac', $idFacture)->get();

        foreach ($ligneFactures as $ligneFacture) {
            $ligneFactureController->deleteAll($ligneFacture->idFac);
        }
        $factureDeleted =  Facture::where('idFac', $idFacture)->delete();
        if($factureDeleted){
            return response()->json(['message' => 'Facture deleted successfully'], 201);
        }
        return response()->json(['message' => 'Error'], 404);

    }
}
