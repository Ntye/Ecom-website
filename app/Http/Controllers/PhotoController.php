<?php

namespace App\Http\Controllers;

use App\Models\Photo;
use App\Models\Produit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PhotoController extends Controller
{
    public function __invoke()
    {
        return true;
    }

    public function product()
    {
        return $this->belongsTo(Produit::class);
    }

    public function index () {
        $photos = Photo::all();

        // Transform the photo data
        $transformedPhotos = $photos->map(function ($photo) {
            return [
                'idPhoto' => $photo->idPhoto,
                'lienPhoto' => asset($photo->lienPhoto),
                'codePro' => $photo->codePro,
            ];
        });

        // Return the transformed data as JSON
        return response()->json($transformedPhotos);
    }

    public function photos_by_product($codePro) {
        $photos = Photo::where('codePro', $codePro)->get();

        if ($photos->isEmpty()) {
            return response()->json(['message' => 'No photos found for the specified codePro'], 404);
        }

        $transformedPhotos = $photos->map(function ($photo) {
            return [
                'idPhoto' => $photo->idPhoto,
                'lienPhoto' => asset($photo->lienPhoto),
            ];
        });

        return $transformedPhotos->isEmpty() ? [] : $transformedPhotos;
    }

    public function create()
    {
        return view('upload');
    }

    public function store(Request $request){
        // Validate the incoming request
        $validatedData = $request->validate([
            'photo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'codePro' => 'required',
        ]);

        $originalFullName = $request->file('photo')->getClientOriginalName();
        $originalName = pathinfo($originalFullName, PATHINFO_FILENAME);

        $photoexists = Photo::where('idPhoto', $originalName)->first();

        if ($photoexists) {
            return response()->json(['message' => 'Image Already Exists'], 404);
        }

        // Store the file with its original name and extension in the public disk
        $path = $request->file('photo')->storeAs('photos', $originalFullName, 'public');
        $url = Storage::url($path);

        // Create a new Photo instance and save the details
        $photo = new Photo();
        $photo->idPhoto = $originalName;
        $photo->lienPhoto = $url;
        $photo->codePro = $validatedData['codePro'];

        $photo->save();

        return response()->json(['message' => 'Photo inserted successfully'], 201);
    }


    public function deleteAll($codePro){
        $photos = Photo::where('codePro', $codePro)->delete();
    }
}
