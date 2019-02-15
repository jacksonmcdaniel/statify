<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


use App\Song;

class TrendController extends Controller
{
    public function index() {
        $songs = Song::all('name','artist');


        return view('trends', ['songs' => $songs, 'name' => "Trend"]);
    }
}
