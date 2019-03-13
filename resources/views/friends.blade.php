@extends('template')

@section('title')
    <title>Statify Friends</title>

@endsection

@section('content')

    <script>console.log("{{$friends}}")</script>
	<div id="Friends" friends="{{$friends}}"></div>

@endsection
