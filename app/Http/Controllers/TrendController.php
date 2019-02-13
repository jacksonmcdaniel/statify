<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TrendController extends Controller
{
    public function index() {
        $songs = [
            0 => array("id" => 0, "name" => "song1", "count" => 22),
            1 => array("id" => 1, "name" => "song2", "count" => 20)];

        return view('trends', [
            'songs' => $songs,
            'name' => "Trend"]);
    }
}
