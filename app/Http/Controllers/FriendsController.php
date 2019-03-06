<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FriendsController extends Controller
{
    public function index() {
        $uid = session('uid');


        $friends = DB::table('friends')
                ->join('users', 'friends.f_uid', '=', 'users.uid')
                ->where('friends.uid', '=', $uid)
                ->select('users.name', 'users.email', 'users.uid')
                ->get()->values();

        //dd($friends->toArray());
        return view('friends', [
            'uid' => $uid,
            'friends' => $friends,
            'tabIndex' => 0,
            'name' => "Friends"]);
    }
}
