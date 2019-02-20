<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index() {
        return view('home', [
            'tabIndex' => 0,
            'name' => "Home"]);
    }}
