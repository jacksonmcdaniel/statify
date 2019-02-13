@extends('template')

@section('title')
    <title>Statify Trends</title>

@endsection

@section('content')
    <div id="TrendRoot" name={{ $name }} songs={{ json_encode($songs) }}></div>

    <h1>{{ $name }}</h1>

@endsection