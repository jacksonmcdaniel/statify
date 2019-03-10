<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Recommendations;

class RecommendationController extends Controller
{
    public function index() {
        $name = 'long_term';
        $uid = session('user_id');
        $songs = Recommendations::getSongs($name, $uid);

        return view('recommendations', [
            'user_id' => session('user_id'),
            'tabIndex' => 0,
            'name' => "Recommendations",
        	'songs' => $songs]);
    }

    
}
