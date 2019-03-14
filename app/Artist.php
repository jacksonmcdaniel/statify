<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

use App\Song;

class Artist extends Model {

   public static function getArtists($type, $user_id) {
      $trend_id = DB::select('
         SELECT trend_id
         FROM trends
         WHERE user_id=? AND type=?',
         [$user_id, $type]
      )[0]->trend_id;

      $artists = DB::table('artists_in_trends')
         ->where('artists_in_trends.trend_id', '=', $trend_id)
         ->join('artists', 'artists.artist_id' ,'=', 'artists_in_trends.artist_id')->orderBy('artists_in_trends.artist_ordinal')
         ->select('artists.*', 'artists_in_trends.artist_ordinal')->get()->values();
      return $artists;
   }

    public static function getTopArtist($type, $user_id) {
      $trend_id = DB::select('
         SELECT trend_id
         FROM trends
         WHERE user_id=? AND type=?',
         [$user_id, $type]
      );

      if ($trend_id == null) {
         return null;
      }

      $trend_id = $trend_id[0]->trend_id;


      $artist = DB::select('
         SELECT artists.*
         FROM artists
         JOIN artists_in_trends ON artists.artist_id = artists_in_trends.artist_id
         WHERE artists.artist_id = artists.artist_id AND artists_in_trends.trend_id=? AND artists_in_trends.artist_ordinal=0',
         [$trend_id]
      );
      return $artist;
   }
}
