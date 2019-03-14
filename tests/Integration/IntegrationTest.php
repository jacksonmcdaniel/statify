<?php

namespace Tests\Integration;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;

use App\Http\Controllers\RecommendationController;
use App\Recommendations;
use App\Trend;
use App\Artist;

class IntegrationTest extends TestCase
{
    public function testRecommendationGetSongsFromDB()
    {
        $user_id = DB::select('select user_id from users where name = ?',
            ['Joshua Boe'])[0]->user_id;
        $recommendations = Recommendations::getSongs($user_id)->all();
        
        $this->assertObjectHasAttribute('song_name', $recommendations[0]);
        $this->assertNotNull($recommendations[0]->song_name);
        
        $this->assertObjectHasAttribute('artist', $recommendations[0]);
        $this->assertNotNull($recommendations[0]->artist);

        $this->assertObjectHasAttribute('image', $recommendations[0]);
        $this->assertNotNull($recommendations[0]->image);
        
        $numSongs = count($recommendations);
        $this->assertEquals($numSongs, 25);
    }

    public function testTrendsGetTopSongsFromDB()
    {
        $JOSHS_TOP_SONG = "Keep It Mello (feat. Omar LinX)";
        $JOSH_TOP_ARTIST = "ODESZA";

        $user_id = DB::select('select user_id from users where name = ?',
            ['Joshua Boe'])[0]->user_id;
        $topSong = Trend::getTopSong('long_term_songs', $user_id);
        $topArtist = Artist::getTopArtist('long_term_artists', $user_id);
        $topRecommendation = Recommendations::getTopSong($user_id);

        $this->assertObjectHasAttribute('song_name', $topSong[0]);
        $this->assertEquals($topSong[0]->song_name, $JOSHS_TOP_SONG);
        $this->assertEquals(count($topSong), 1);

        $this->assertObjectHasAttribute('artist_name', $topArtist[0]);
        $this->assertEquals($topArtist[0]->artist_name, $JOSH_TOP_ARTIST);
        $this->assertEquals(count($topArtist), 1);

        $this->assertObjectHasAttribute('song_name', $topRecommendation[0]);
        $this->assertEquals(count($topRecommendation), 1);
    }
}
