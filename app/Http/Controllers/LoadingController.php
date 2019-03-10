<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use SpotifyWebAPI;
use App\Trend;
use App\Api;
class LoadingController extends Controller
{
   public function index() {
      return view('loading', [
         'user_id' => session('user_id'),
         'tabIndex' => 0,
         'name' => "Loading Data"]);
    }

   public function show($name) {
      $this->get_song_trends();

      return redirect('/home');
   }

   public function get_song_trends() {
      $trends_timestamp = DB::select('
         SELECT updated_at
         FROM trends 
         WHERE user_id = ? AND type LIKE ?
         LIMIT 1', 
         [session('user_id'), '%term'])[0]->updated_at;

      //If the trend is less than one week old, do nothing
      if((time() - strtotime($trends_timestamp)) < (7 * 24 * 60 * 60)) {
         return;
      }

      $api = new Api();

      $trend_short_term = $api->get_trend('tracks', 25, 0, 'short_term');
      $trend_medium_term = $api->get_trend('tracks', 25, 0, 'medium_term');
      $trend_long_term = $api->get_trend('tracks', 25, 0, 'long_term');

      $this->insert_trend($trend_short_term, 'short_term', $api);
      $this->insert_trend($trend_medium_term, 'medium_term', $api);
      $this->insert_trend($trend_long_term, 'long_term', $api);
   }

   public function insert_trend($trend, $range, $api) {
      DB::delete('
         DELETE FROM trends 
         WHERE user_id=? AND type=?',
         [session('user_id'), $range]
      );
      DB::insert('
         INSERT INTO trends 
         (type, user_id, updated_at) 
         VALUES (?, ?, ?)', 
         [$range, session('user_id'), now()]
      );
      $trend_id = DB::select('
         SELECT trend_id 
         FROM trends 
         WHERE user_id=? AND type=?',
         [session('user_id'), $range]
      )[0]->trend_id;
      $i = 0;
      foreach($trend['items'] as $item) {
         $audio_features = $api->get_audio_features($item['id']);
         DB::insert(
            'INSERT IGNORE INTO  songs 
            (song_id, song_name, artist, image, acousticness, danceability, 
            energy, instrumentalness, liveness, speechiness, valence, tempo) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
            [$item['id'], $item['name'], $item['album']['artists'][0]['name'], 
               $item['album']['images'][0]['url'],
               $audio_features['audio_features'][0]['acousticness'],   
               $audio_features['audio_features'][0]['danceability'],
               $audio_features['audio_features'][0]['energy'],         
               $audio_features['audio_features'][0]['instrumentalness'], 
               $audio_features['audio_features'][0]['liveness'],       
               $audio_features['audio_features'][0]['speechiness'], 
               $audio_features['audio_features'][0]['valence'],        
               $audio_features['audio_features'][0]['tempo']]
         );       
         DB::insert('
            INSERT IGNORE INTO songs_in_trends 
            (trend_id, song_id, song_ordinal) 
            VALUES (?, ?, ?)', 
            [$trend_id, $item['id'], $i]);
         $i++;
      }
   }
}
