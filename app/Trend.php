<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\SongsInTrends;
use App\Song;

class Trend extends Model
{
    protected $fillable = [
        'uid', 'name'
    ];
    public function songs()
    {        
        return $this->songIDs()->hasMany(Song::class, 'sid', 'sid');
    }

    public function songIDs()
    {
        return $this->hasMany(SongsInTrends::class, 'tid', 'tid');
    }
}
