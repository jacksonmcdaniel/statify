<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSongsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('songs', function (Blueprint $table) {
            $table->string('song_id');
            $table->string('song_name');
            $table->string('artist');
            $table->string('image');
            $table->tinyInteger('key')->nullable();
            $table->tinyInteger('mode')->nullable();
            $table->double('acousticness', 6, 5)->nullable();
            $table->double('danceability', 6, 5)->nullable();
            $table->double('energy', 6, 5)->nullable();
            $table->double('instrumentalness', 6, 5)->nullable();
            $table->double('liveness', 6, 5)->nullable();
            $table->double('speechiness', 6, 5)->nullable();
            $table->double('valence', 6, 5)->nullable();
            $table->double('tempo', 7, 3)->nullable();

            $table->primary('song_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('songs');
    }
}
