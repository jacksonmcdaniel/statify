<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Recommendations;

class RecommendationController extends Controller
{
   public function index() {
      $songs = Recommendations::getSongs(session('user_id'));

      return view('recommendations', [
         'user_id' => session('user_id'),
         'tabIndex' => 0,
         'name' => "Recommendations",
         'songs' => $songs]
      );
   }
}
