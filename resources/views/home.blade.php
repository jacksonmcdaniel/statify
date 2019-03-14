@extends('template')

@section('title')
    <title>Statify Home</title>

@endsection

@section('content')

	<div id="HomeRoot" topSong="{{$topSong}}" topArtist="{{$topArtist}}" topRecommendation="{{$topRecommendation}}"></div>

@endsection