<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie_edge">
    <title>Document</title>
</head>
<body >
    <h1>Upload</h1>
    <form method="POST" action="/upload" enctype="multipart/form-data">
        @csrf
        <input type="file" name="photo">
        <input type="submit" name="upload">
    </form>
{{--    <hr/>--}}
{{--    <@foreach($photos as $photo)--}}
{{--         <li>{{$photo->name}} <img src="{{asset('storage/images/', $photo->name)}}"/> </li>--}}
{{--    @endforeach--}}
</body>
</html>
