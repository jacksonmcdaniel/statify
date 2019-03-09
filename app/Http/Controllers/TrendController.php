<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use SpotifyWebAPI;
use App\Song;
use App\Trend;
use App\Api;

class TrendController extends Controller {

   public function index() {
      $this->get_song_trends();

      $songs = Trend::getSongs('allTime', session('user_id'));

      return view('trends', [
         'user_id' => session('user_id'),
         'songs' => $songs,
         'tabIndex' => 0,
         'name' => "Trends"]);
    }

   public function show() {
      $user_id = session('user_id');

      /*
      if ($name=="allTime") {
          $index = 0;
      }
      else if ($name=="Monthly") {
          $index = 1;
      }
      else {
          $index = 2;
      }*/

      $songs = Trend::getSongs('short_term', $user_id);
     
      return view('trends', [
         'user_id' => session('user_id'),
         'songs' => $songs,
         'tabIndex' => 2,
         'name' => "Trends"
      ]);
   }

    public function get_song_trends() {
        $api = new Api(); 

        $trend_short_term = $api->get_trend('tracks', 25, 0, 'short_term');
        $trend_medium_term = $api->get_trend('tracks', 25, 0, 'medium_term');
        $trend_long_term = $api->get_trend('tracks', 25, 0, 'long_term');

        $this->insert_trend($trend_short_term, 'short_term', $api);
        $this->insert_trend($trend_medium_term, 'medium_term', $api);
        $this->insert_trend($trend_long_term, 'long_term', $api);
   }

    public function insert_trend($trend, $range, $api) {
        DB::insert('insert ignore into trends (type, user_id) values (?, ?)', 
         [$range, session('user_id')]);
        //TODO This is shitty and it should be made better. Credit for being bad goes to @jacksonmcdaniel 
        // @joshuaboe here, I'm sorry
        $trend_id = DB::select('select trend_id from trends order by trend_id desc limit 1')[0]->trend_id;

        foreach($trend['items'] as $item) {
            $audio_features = $api->get_audio_features($item['id']);
            DB::insert(
                'insert ignore into songs 
                (song_id, song_name, artist, image, acousticness, danceability, 
                    energy, instrumentalness, liveness, speechiness, valence, tempo) 
                values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
                [$item['id'], $item['name'], $item['album']['artists'][0]['name'], $item['album']['images'][0]['url'],
                    $audio_features['audio_features'][0]['acousticness'],   $audio_features['audio_features'][0]['danceability'],
                    $audio_features['audio_features'][0]['energy'],         $audio_features['audio_features'][0]['instrumentalness'], 
                    $audio_features['audio_features'][0]['liveness'],       $audio_features['audio_features'][0]['speechiness'], 
                    $audio_features['audio_features'][0]['valence'],        $audio_features['audio_features'][0]['tempo']]
                );       
            DB::insert('insert ignore into songs_in_trends (trend_id, song_id) values (?, ?)', 
                [$trend_id, $item['id']]);
        }
    }
}
