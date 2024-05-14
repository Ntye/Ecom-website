<?php

namespace App\Http\Controllers;

use App\Models\Photo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PhotoController extends Controller
{
    public function __invoke()
    {
        return true;
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


    public function storeall(Request $request)
    {
        // Validate the incoming request
        $validatedData = $request->validate([
            'photos.*' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Validate multiple files
            'codePro' => 'required',
        ]);

        $photos = $request->file('photos');
        $responses = [];

        foreach ($photos as $photo) {
            // Get the original file name and extension
            $originalFullName = $photo->getClientOriginalName();
            $originalName = pathinfo($originalFullName, PATHINFO_FILENAME);
            $extension = $photo->getClientOriginalExtension();

            // Check if the photo already exists by the base name (without extension)
            $photoExists = Photo::where('idPhoto', $originalName)->first();

            if ($photoExists) {
                $responses[] = ['message' => 'Image Already Exists: ' . $originalFullName, 'status' => 404];
                continue;
            }

            // Store the file with its original name and extension in the public disk
            $path = $photo->storeAs('photos', $originalFullName, 'public');
            $url = Storage::url($path);

            // Create a new Photo instance and save the details
            $newPhoto = new Photo();
            $newPhoto->idPhoto = $originalName; // Save the name without the extension
            $newPhoto->lienPhoto = $url;
            $newPhoto->codePro = $validatedData['codePro'];

            // Save the photo to the database
            $newPhoto->save();

            $responses[] = ['message' => 'Photo inserted successfully: ' . $originalFullName, 'status' => 201];
        }

        return response()->json($responses);
    }


}
