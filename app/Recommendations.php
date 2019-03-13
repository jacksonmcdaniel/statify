<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

use App\SongsInTrends;
use App\Song;

class Recommendations extends Model {
   protected $fillable = [
      'uid', 'name'
   ];

   public static function getSongs($user_id) {
	   $recommendation_id = DB::table('recommendations')
      	->where('user_id', '=', $user_id)
         ->first()
         ->recommendation_id;

      $songs = DB::table('songs_in_recommendations')
      	->where('songs_in_recommendations.recommendation_id', '=', $recommendation_id)
         ->join('songs', 'songs.song_id', '=', 'songs_in_recommendations.song_id')
         ->orderBy('songs_in_recommendations.song_ordinal')
         ->select('songs.*', 'songs_in_recommendations.song_ordinal')
         ->get()->values();
      return $songs;
   }

   public static function getTopSong($user_id) {
      $recommendation_id = DB::select('
         SELECT recommendation_id 
         FROM recommendations 
         WHERE user_id=?',
         [$user_id]
      )[0]->recommendation_id;


      $songs = DB::select('
         SELECT songs.* 
         FROM songs
         JOIN songs_in_recommendations ON songs.song_id = songs_in_recommendations.song_id
         WHERE songs.song_id = songs_in_recommendations.song_id AND songs_in_recommendations.recommendation_id=? AND songs_in_recommendations.song_ordinal=0',
         [$recommendation_id]
      );
      return $songs;
   }
}
