<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

use App\Song;
use App\Trend;

class TrendController extends Controller
{

    public function index() {
        //session(['uid' => 1]);
        //session()->forget('uid');
        $uid = session('uid');

        //$songs = Trend::getSongs('allTime', $uid);
        $songs = "[";
        $total = 10;
        for ($x = 0; $x <= $total; $x++) {
            $songs = $songs . '{"sid":"' . $x .'",' .
                               '"name":"song name ' . $x . '",' .
                               '"artist":"artist' . $x . '",' .
                               '"Danceability":20,' .
                               '"Popularity":20,' .
                               '"Speechiness":20,' .
                               '"Energy":20,' .
                               '"Instrumentalness":20,' .
                               '"Acousticness":20,' .
                               '"Valence":20,' .
                               '"Liveness":20}';
            if ($x < $total) {
                $songs = $songs . ",";
            }
        } 
        // $songs = ('[' .
        //             '{"sid":"1","name":"song name 1","artist":"artist1","Danceability":20},' .
        //             '{"sid":"2","name":"song name 2","artist":"artist2","Danceability":20}' .
        //          ']');
        $songs = $songs . "]";
        return view('trends', [
            'uid' => $uid,
            'songs' => $songs,
            'tabIndex' => 0,
            'name' => "Trends"]);
    }

    public function show($name) {
        $uid = session('uid');

        if ($name=="allTime")
        {
            $index = 0;
        }
        else if ($name=="Monthly")
        {
            $index = 1;
        }
        else
        {
            $index = 2;
        }

        $songs = Trend::getSongs($name, $uid);
        
        return view('trends', [
            'uid' => $uid,
            'songs' => $songs,
            'tabIndex' => $index,
            'name' => "Trends"]);
    }
}
