<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Trend;

class ArtistController extends Controller
{
    //
     public function index() {
     	$user_id = session('user_id');
        $name = 'long_term';

        $songs = Trend::getSongs($name, $user_id);


        return view('artists', [
            'user_id' => session('user_id'),
            'tabIndex' => 0,
            'name' => "Top Artists",
        	'songs' => $songs]);
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
     
      return view('artists', [
         'user_id' => session('user_id'),
         'songs' => $songs,
         'tabIndex' => $index,
         'name' => "Top Artists"
      ]);
   }
}
