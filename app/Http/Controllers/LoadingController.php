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
        $trend_short_term = $api->get_trend('tracks', 25, 0, 'short_term');
        $trend_medium_term = $api->get_trend('tracks', 25, 0, 'medium_term');
        $trend_long_term = $api->get_trend('tracks', 25, 0, 'long_term');

        $this->insert_trend($trend_short_term, 'short_term', $api);
        $this->insert_trend($trend_medium_term, 'medium_term', $api);
        $this->insert_trend($trend_long_term, 'long_term', $api);
   }

    public function insert_trend($trend, $range, $api) {
        DB::delete('DELETE FROM trends WHERE user_id=? AND type=?', [session('user_id'), $range]);
        DB::insert('insert into trends (type, user_id) values (?, ?)', 
         [$range, session('user_id')]);

        $trend_id = DB::select('select trend_id from trends WHERE user_id=? AND type=?', [session('user_id'), $range])[0]->trend_id;

        $i = 0;
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
            DB::insert('insert ignore into songs_in_trends (trend_id, song_id, song_ordinal) values (?, ?, ?)', 
                [$trend_id, $item['id'], $i]);
            $i++;
        }
    }

    public function get_song_recommendations($api) {
        $tracks_seed = DB::select('select song_id 
            from trends 
            join songs_in_trends on trends.trend_id = songs_in_trends.trend_id
            where user_id = ? and type = ? order by song_ordinal
            limit 5',
            [session('user_id'), 'short_term']
        );
        $tracks_seed = array_column($tracks_seed, 'song_id');

        $tracks_seed_array = [];
        foreach($tracks_seed as $track) {
            array_push($tracks_seed_array, (String)$track);
        }

        $recommendation = $api->get_recommendation(25, $tracks_seed_array); 
        //$recommendation = $api->get_recommendation();
        $this->insert_recommendation($recommendation, $api);
    }

    public function insert_recommendation($recommendation, $api) {
        DB::delete('DELETE FROM recommendations WHERE user_id=?', [session('user_id')]);
        DB::insert('insert into recommendations (user_id) values (?)', 
         [session('user_id')]);

        $recommendation_id = DB::select('select recommendation_id from recommendations WHERE user_id=?', [session('user_id')])[0]->recommendation_id;

        $i = 0;
        foreach($recommendation['tracks'] as $item) {
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
            DB::insert('insert ignore into songs_in_recommendations (recommendation_id, song_id, song_ordinal) values (?, ?, ?)', 
                [$recommendation_id, $item['id'], $i]);
            $i++; 
        }
    }
}
