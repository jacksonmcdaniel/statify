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

        if ($name=="allTime") {
            $index = 0;
        }
        else if ($name=="Monthly") {
            $index = 1;
        }
        else {
            $index = 2;
        }

        $songs = Trend::getSongs($name, $uid);
        
        return view('trends', [
            'uid' => $uid,
            'songs' => $songs,
            'tabIndex' => $index,
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

            foreach ($trend_short as $item) {
                print_r($item);
                echo '';
            }
            die();
        }

}
