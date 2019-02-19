@extends('template')

@section('title')
    <title>Statify Trends</title>

@endsection

@section('content')
    <div id="TrendRoot" name={{$name}} songs={{$songs}}></div>
  
@endsection