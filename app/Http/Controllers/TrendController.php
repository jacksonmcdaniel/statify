<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use SpotifyWebAPI;
use App\Song;
use App\Trend;
use App\Api;
use App\User;

class TrendController extends Controller {

   public function index() {
      $songs = Trend::getSongs('long_term_songs', session('user_id'));
      
      session()->forget('friend_id');

      return view('trends', [
         'user_id' => session('user_id'),
         'user_image' => session('user_image'),
         'songs' => $songs,
         'tabIndex' => 0,
         'name' => "Top Songs"]);
    }

   public function show($name) {
       $user_id = session('user_id');
       $friend_id = session('friend_id');

       if ($name == "long_term_songs") {
           $index = 0;
       } else if ($name == "medium_term_songs") {
           $index = 1;
       } else {
           $index = 2;
       }

       if ($friend_id != null) {
           $songs = Trend::getSongs($name, $friend_id);

           $friendUserInfo = User::getUserInfo($friend_id);

           if ($friendUserInfo == null) {
              $name = "Friend's Top Songs";
           } else {
              $name = ($friendUserInfo->name . "'s Top Songs");
           }
       } else {
           $songs = Trend::getSongs($name, $user_id);
           $name = "Top Songs";
       }

       return view('trends', [
           'user_id' => session('user_id'),
           'user_image' => session('user_image'),
           'songs' => $songs,
           'tabIndex' => $index,
           'name' => $name
       ]);
   }
}
