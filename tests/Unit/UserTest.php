<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Backend\User\User;

class UserTest extends TestCase
{
    public function testGetTrend1()
    {
        $user = new User("Josh Bob");
        $trends = $user->getTrends("Poker Face");
        $this->assertEquals($trends, "ecaF rekoP");
    }

    public function testGetTrend2()
    {
        $user = new User("Janice Storminger");
        $trends = $user->getTrends("");
        $this->assertEquals($trends, "");
    }

    public function testGetTrend3()
    {
        $user = new User("Piko Rico");
        $trends = $user->getTrends("racecar");
        $this->assertEquals($trends, "racecar");
    }

    public function testTest()
    {
        $variable = 5;
        $this->assertEquals($variable, 5);
    }
}
