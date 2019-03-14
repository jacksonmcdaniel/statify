<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Artist;

class ArtistController extends Controller
{
     public function index() {
     	$user_id = session('user_id');
        $name = 'long_term_artists';

        $artists = Artist::getArtists($name, $user_id);


        return view('artists', [
         'user_id' => $user_id,
          'user_image' => session('user_image'),
          'tabIndex' => 0,
          'name' => "Top Artists",
        	'artists' => $artists]);
    }

    public function show($name) {
      $user_id = session('user_id');

      if ($name=="long_term_artists") {
          $index = 0;
      }
      else if ($name=="medium_term_artists") {
          $index = 1;
      }
      else {
          $index = 2;
      }

      $artists = Artist::getArtists($name, $user_id);
     
      return view('artists', [
         'user_id' => $user_id,
         'user_image' => session('user_image'),
         'artists' => $artists,
         'tabIndex' => $index,
         'name' => "Top Artists"
      ]);
   }
}
