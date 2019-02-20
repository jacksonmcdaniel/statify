@extends('template')

@section('title')
    <title>Statify Account</title>

@endsection

@section('content')

	<div id="AccountRoot" name={{$username}} email={{$email}}></div>
    <h1>Account</h1>


@endsection