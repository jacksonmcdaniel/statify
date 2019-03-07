<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RecommendationController extends Controller
{
    public function index() {
        return view('recommendations', [
            'user_id' => session('user_id'),
            'tabIndex' => 0,
            'name' => "Recommendations"]);
    }
}
