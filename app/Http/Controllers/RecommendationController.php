<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Recommendations;

class RecommendationController extends Controller
{
    public function index() {
        $uid = session('uid');
        $name = 'allTime';

        $songs = Recommendations::getSongs($name, $uid);

        return view('recommendations', [
            'uid' => $uid,
            'tabIndex' => 0,
            'name' => "Recommendations",
        	'songs' => $songs]);
    }

    
}
