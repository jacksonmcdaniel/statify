<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Trend;
use App\Recommendations;

class HomeController extends Controller
{
    public function index() {
        $user_id = session('user_id');

        $topSong = Trend::getTopSong('long_term', $user_id);
        $topRecommendation = Recommendations::getTopSong($user_id);

        return view('home', [
            'user_id' => session('user_id'),
            'tabIndex' => 0,
            'topSong' => json_encode($topSong[0]),
            'topArtist' => json_encode($topSong[0]),
            'topRecommendation' => json_encode($topRecommendation[0]),
            'name' => "Home"]);
            //'name' => "0};alert(0); var hi = {x:0"]);
    }

    public function logout() {
        session()->forget('user_id');

        return view('home', [
            'user_id' => null,
            'tabIndex' => 0,
            'topSong' => null,
            'topArtist' => null,
            'topRecommendation' => null,
            'name' => "Home"]);
    }
}
