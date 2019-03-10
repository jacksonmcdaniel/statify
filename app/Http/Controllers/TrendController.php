<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use SpotifyWebAPI;
use App\Song;
use App\Trend;
use App\Api;

class TrendController extends Controller {

   public function index() {
      //$this->get_song_trends();

      $songs = Trend::getSongs('long_term', session('user_id'));

      return view('trends', [
         'user_id' => session('user_id'),
         'songs' => $songs,
         'tabIndex' => 0,
         'name' => "Trends"]);
    }

   public function show($name) {
      $user_id = session('user_id');

      if ($name=="long_term") {
          $index = 0;
      }
      else if ($name=="medium_term") {
          $index = 1;
      }
      else {
          $index = 2;
      }

      $songs = Trend::getSongs($name, $user_id);
     
      return view('trends', [
         'user_id' => session('user_id'),
         'songs' => $songs,
         'tabIndex' => $index,
         'name' => "Trends"
      ]);
   }
}
