<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSongsInTrendsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('songs_in_trends', function (Blueprint $table) {
            $table->unsignedInteger('trend_id');
            $table->string('song_id');
            $table->unsignedInteger('song_ordinal');
            $table->timestamps();
            
            $table->primary(['trend_id', 'song_id']);
            $table->foreign('trend_id')->references('trend_id')->on('trends');
            $table->foreign('song_id')->references('song_id')->on('songs');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('songs_in_trends');
    }
}
