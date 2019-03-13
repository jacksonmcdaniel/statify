<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class SongsInRecommendations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('songs_in_recommendations', function (Blueprint $table) {
            $table->unsignedInteger('recommendation_id');
            $table->string('song_id');
            $table->tinyInteger('song_ordinal');
            $table->timestamps();

            $table->primary(['recommendation_id, song_id']);
            $table->foreign('song_id')->references('song_id')->on('songs');
            $table->foreign('recommendation_id')->references('recommendation_id')->on('recommendations');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('songs_in_recommendations');
    }
}
