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

        $songs = Trend::getSongs('allTime', $uid);

        return view('trends', [
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
            'songs' => $songs,
            'tabIndex' => $index,
            'name' => "Trends"]);
    }
}
