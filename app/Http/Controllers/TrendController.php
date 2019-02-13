<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TrendController extends Controller
{
    public function index() {
        $trends = ["trend1", "trend2"];

        return view('trends', ['trends' => $trends, 'name' => "Trend"]);
    }
}
