@extends('template')

@section('title')
    <title>Statify Account</title>

@endsection

@section('content')

	<div id="AccountRoot" name="{{$username}}" email={{$email}} user_image={{$user_image}}></div>
  
@endsection