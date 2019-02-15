@extends('template')

@section('title')
    <title>Statify Trends</title>

@endsection

@section('content')
    <div id="TrendRoot" name={{$name}} songs={{$songs}}></div>


    @yield('content')
  

    <h1>Trends</h1>

    <h1>{{ $name }}</h1>

@endsection