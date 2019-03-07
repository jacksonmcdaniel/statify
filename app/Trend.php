<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

use App\SongsInTrends;
use App\Song;

class Trend extends Model {
   
   public static function getSongs($type, $user_id) {
      $songs = DB::table('trends')
         ->join('songs_in_trends', 'trends.trend_id', '=', 'songs_in_trends.trend_id')
         ->join('songs', 'songs.song_id' ,'=', 'songs_in_trends.song_id')
         ->where('trends.type', '=', $type)
         ->select('songs.song_id', 'songs.song_name', 'songs.artist', 'trends.user_id')
         ->get()
         ->where('user_id', '=', $user_id)->values();
      return $songs;
   }
}
