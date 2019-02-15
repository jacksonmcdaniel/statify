@extends('template')

@section('title')
    <title>Statify Trends</title>

@endsection

@section('content')
    <div id="TrendRoot" songs={{$songs}}></div>
    <h1>Trends</h1>

@endsection