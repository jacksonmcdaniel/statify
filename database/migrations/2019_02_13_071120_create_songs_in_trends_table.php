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
            $table->increments('id');
            $table->unsignedInteger('tid');
            $table->unsignedInteger('sid');
            $table->unsignedInteger('sid');

            $table->timestamps();

            $table->foreign('tid')->references('tid')->on('trends');
            $table->foreign('sid')->references('sid')->on('songs');

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
