@extends('template')

@section('title')
    <title>Statify Account</title>

@endsection

@section('content')

	<div id="AccountRoot" name="{{$username}}" email={{$email}} accountImage={{$accountImage}}></div>
  
@endsection