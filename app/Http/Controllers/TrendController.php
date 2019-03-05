<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

use SpotifyWebAPI;

use App\Song;
use App\Trend;

class TrendController extends Controller
{

    public function index() {
        $this->get_trend();

        $uid = session('uid');

        $songs = Trend::getSongs('allTime', $uid);

        return view('trends', [
            'uid' => $uid,
            'songs' => $songs,
            'tabIndex' => 0,
            'name' => "Trends"]);
    }

    public function show() {
        $uid = session('uid');

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

        $songs = Trend::getSongs('weekly', $uid);
        
        return view('trends', [
            'uid' => $uid,
            'songs' => $songs,
            'tabIndex' => 2,
            'name' => "Trends"]);
    }

	public function get_trend($type='tracks') {
            $uid = session('uid');

            $accessToken = DB::select('select access_token from users where uid = ?', [$uid]);

            $api = new SpotifyWebAPI\SpotifyWebAPI();
            $api->setReturnType(SpotifyWebAPI\SpotifyWebAPI::RETURN_ASSOC);
            $api->setAccessToken($accessToken[0]->access_token);

            $trend_short = $api->getMyTop($type, $options = [
                'limit' => 25,
                'offset' => 0,
                'time_range' => 'short_term'
            ]);

            DB::insert('insert ignore into trends (name, uid) values (?, ?)', ['weekly', $uid]);
            $tid = DB::select('select tid from trends order by tid desc limit 1')[0]->tid;

            foreach($trend_short['items'] as $item) {
               DB::insert('insert ignore into songs (sid, name, artist) values (?, ?, ?)', 
                  [$item['id'], $item['name'], $item['album']['artists'][0]['name']]);

               DB::insert('insert ignore into songs_in_trends (tid, sid) values (?, ?)', 
                  [$tid, $item['id']]);
            }
        }

}
