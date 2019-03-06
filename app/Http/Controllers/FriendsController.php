<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FriendsController extends Controller
{
    //
    public function index() {
        $uid = session('uid');

        return view('friends', [
            'uid' => $uid,
            'tabIndex' => 0,
            'name' => "Friends"]);
    }
}
