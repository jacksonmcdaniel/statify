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
      $api = new Api();
      $this->get_song_trends($api);
      $this->get_song_recommendations($api);

      return redirect('/home');
   }

   public function get_song_trends($api) {
      $trends_timestamp = DB::select('
         SELECT updated_at
         FROM trends 
         WHERE user_id = ? AND type LIKE ?
         LIMIT 1', 
         [session('user_id'), '%term']);

      if (array_key_exists(0, $trends_timestamp)) {
         $trends_timestamp = $trends_timestamp[0]->updated_at;
         //If the trend is less than three days old, do nothing
         if((time() - strtotime($trends_timestamp)) < (3 * 24 * 60 * 60)) {
            return;
         }
      }

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
         DB::insert('
            INSERT IGNORE INTO  songs 
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

    public function get_song_recommendations($api) {
        //Check that user has recent top songs to use as a seed
        if (sizeof($tracks_seed = get_seed('short_term')) > 0) {
            $recommendation = $api->get_recommendation(25, $tracks_seed);
        }
        //Check that user has all time top songs to use as a seed
        else if (sizeof($tracks_seed = get_seed('long_term')) > 0) {
            $recommendation = $api->get_recommendation(25, $tracks_seed);
        }
        //User has no songs, defaulting to SICKO MODE
        else {
            $recommendation = $api->get_recommendation(25);
        }
        $this->insert_recommendation($recommendation, $api);
    }

    public function get_seed($term) {
        $tracks_seed = DB::select('
         select song_id 
         from trends 
         join songs_in_trends on trends.trend_id = songs_in_trends.trend_id
         where user_id = ? and type = ? order by song_ordinal
         limit 5',
         [session('user_id'), $term]
      );
      return array_column($tracks_seed, 'song_id');
    }
   
   public function insert_recommendation($recommendation, $api) {
      DB::delete('
         DELETE FROM recommendations 
         WHERE user_id=?', 
         [session('user_id')]
      );
      DB::insert('
         INSERT INTO recommendations 
         (user_id) 
         VALUES (?)', 
         [session('user_id')]
      );
      $recommendation_id = DB::select('
         SELECT recommendation_id 
         FROM recommendations 
         WHERE user_id=?', 
         [session('user_id')]
      )[0]->recommendation_id;
      $i = 0;
      foreach($recommendation['tracks'] as $item) {
         $audio_features = $api->get_audio_features($item['id']);
         DB::insert('
            INSERT IGNORE INTO songs 
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
            INSERT IGNORE INTO songs_in_recommendations 
            (recommendation_id, song_id, song_ordinal) 
            VALUES (?, ?, ?)', 
            [$recommendation_id, $item['id'], $i]
         );
         $i++; 
      }
   }
}
