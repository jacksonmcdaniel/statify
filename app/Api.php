<?php

namespace App;

use Illuminate\Support\Facades\DB;
use SpotifyWebAPI;

class Api {

   public $api;

   function __construct() {
      $this->api = self::get_api_session();
   }

   public static function get_api_session() {
      $access_token = self::get_access_token();
      $api = new SpotifyWebAPI\SpotifyWebAPI();
      $api->setReturnType(SpotifyWebAPI\SpotifyWebAPI::RETURN_ASSOC);
      $api->setAccessToken($access_token);

      return $api;
   }

   public static function get_access_token() {
      return DB::select('select access_token from users where user_id = ?',
            [session('user_id')])[0]->access_token;
   }

   public function get_trend($type = 'tracks', $limit = 25, $offset = 0, $range = 'short_term') {
      $options = [
         'limit' => $limit,
         'offset' => $offset,
         'time_range' => $range
      ];
      return $this->api->getMyTop($type, $options);
   }

   public function get_audio_features($song_id) {
        return $this->api->getAudioFeatures($song_id);   
    }

	public function get_recommendation($limit = 25, $seed_tracks = ['0u695M7KyzXaPIjpEbxOkB']) {
      $options = [
         'limit' => $limit,
         'seed_tracks' => $seed_tracks
      ];
      return $this->api->getRecommendations($options);
   }
}
