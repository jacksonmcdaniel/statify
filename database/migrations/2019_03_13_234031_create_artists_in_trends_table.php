<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArtistsInTrendsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('artists_in_trends', function (Blueprint $table) {
           $table->unsignedInteger('trend_id');
           $table->string('artist_id');
           $table->tinyInteger('artist_ordinal');
           $table->timestamps();

           $table->primary(['trend_id', 'artist_id']);
           $table->foreign('trend_id')->references('trend_id')->on('trends')->onDelete('cascade');
           $table->foreign('artist_id')->references('artist_id')->on('artists');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('artists_in_trends');
    }
}
