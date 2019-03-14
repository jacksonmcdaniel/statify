<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Api;
use App\Recommendations;

class RecommendationController extends Controller
{
    public function index() {
        $songs = Recommendations::getSongs(session('user_id'));

        return view('recommendations', [
            'user_id' => session('user_id'),
            'user_image' => session('user_image'),
            'tabIndex' => 0,
            'name' => "Recommendations",
            'songs' => $songs]
        );
    }

    public function playlistButton() {
        $api = new Api();
        $api->create_playlist(session('user_id'));

        $songs = Recommendations::getSongs(session('user_id'));

        return view('recommendations', [
            'user_id' => session('user_id'),
            'user_image' => session('user_image'),
            'tabIndex' => 0,
            'name' => "Recommendations",
            'songs' => $songs]
        );
    }
}
