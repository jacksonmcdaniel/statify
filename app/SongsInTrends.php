<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SongsInTrends extends Model
{
    protected $fillable = [
        'tid', 'sid'
    ];
}
