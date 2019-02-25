<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

use App\SongsInTrends;
use App\Song;

class Trend extends Model
{
    protected $fillable = [
        'uid', 'name'
    ];

    public static function getSongs($name, $uid)
    {
        $songs = DB::table('trends')
                ->join('songs_in_trends', 'trends.tid', '=', 'songs_in_trends.tid')
                ->join('songs', 'songs.sid' ,'=', 'songs_in_trends.sid')
                ->where('trends.name', '=', $name)
                ->select('songs.sid', 'songs.name', 'songs.artist', 'trends.uid')
                ->get()
                ->where('uid', '=', $uid)->values();
        return $songs;
    }
}
