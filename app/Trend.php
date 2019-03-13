<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

use App\SongsInTrends;
use App\Song;

class Trend extends Model {
   
   public static function getSongs($type, $user_id) {
      $trend_id = DB::select('
         SELECT trend_id 
         FROM trends 
         WHERE user_id=? AND type=?',
         [$user_id, $type]
      )[0]->trend_id;

      $songs = DB::table('songs_in_trends')
         ->where('songs_in_trends.trend_id', '=', $trend_id)
         ->join('songs', 'songs.song_id' ,'=', 'songs_in_trends.song_id')->orderBy('songs_in_trends.song_ordinal')
         ->select('songs.*', 'songs_in_trends.song_ordinal')->get()->values();
      return $songs;
   }

    public static function getTopSong($type, $user_id) {
      $trend_id = DB::select('
         SELECT trend_id 
         FROM trends 
         WHERE user_id=? AND type=?',
         [$user_id, $type]
      )[0]->trend_id;


      $songs = DB::select('
         SELECT songs.* 
         FROM songs
         JOIN songs_in_trends ON songs.song_id = songs_in_trends.song_id
         WHERE songs.song_id = songs_in_trends.song_id AND songs_in_trends.trend_id=? AND songs_in_trends.song_ordinal=0',
         [$trend_id]
      );
      return $songs;
   }
}
