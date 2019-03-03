<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RecommendationController extends Controller
{
    public function index() {
        $uid = session('uid');

        return view('recommendations', [
            'uid' => $uid,
            'tabIndex' => 0,
            'name' => "Recommendations"]);
    }
}
