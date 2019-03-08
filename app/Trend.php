<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

use App\SongsInTrends;
use App\Song;

class Trend extends Model {
   
   public static function getSongs($type, $user_id) {
      $trend_id = DB::table('trends')->where('user_id', '=', $user_id)->where('trends.type', '=', $type)->first()->trend_id;
      $songs = DB::table('songs_in_trends')
         ->where('songs_in_trends.trend_id', '=', $trend_id)
         ->join('songs', 'songs.song_id' ,'=', 'songs_in_trends.song_id')->orderBy('songs_in_trends.song_ordinal')
         ->select('songs.song_id', 'songs.song_name', 'songs.artist', 'songs_in_trends.song_ordinal')->get()->values();

      return $songs;
   }
}
