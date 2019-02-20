<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

use App\Song;
use App\Trend;

class TrendController extends Controller
{

    public function index() {
        session(['uid' => 1]);
        //session()->forget('uid');
        $uid = session('uid');
        $songs = DB::table('trends')
            ->join('songs_in_trends', 'trends.tid', '=', 'songs_in_trends.tid')
            ->join('songs', 'songs.sid' ,'=', 'songs_in_trends.sid')
            ->select('songs.sid', 'songs.name', 'songs.artist', 'trends.tid', 'trends.uid')
            ->get()
            ->where('tid', '=', 1)
            ->where('uid', '=', $uid);

        return view('trends', [
            'songs' => $songs,
            'tabIndex' => 0,
            'name' => "Trends"]);
    }

    public function show($tid) {
        $uid = 1; 

        $songs = DB::table('trends')
            ->join('songs_in_trends', 'trends.tid', '=', 'songs_in_trends.tid')
            ->join('songs', 'songs.sid' ,'=', 'songs_in_trends.sid')
            ->select('songs.sid', 'songs.name', 'songs.artist', 'trends.tid', 'trends.uid')
            ->get()
            ->where('tid', '=', $tid)
            ->where('uid', '=', $uid);
        
        return view('trends', [
            'songs' => $songs,
            'tabIndex' => $tid-1,
            'name' => "Trends"]);
    }
}
