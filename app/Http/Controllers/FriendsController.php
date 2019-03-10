<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FriendsController extends Controller
{
    public function index() {
        $uid = session('user_id');


        $friends = DB::table('friends')
                ->join('users', 'friends.f_uid', '=', 'users.user_id')
                ->where('friends.uid', '=', $uid)
                ->select('users.name', 'users.email', 'users.user_id')
                ->get()->values();

        //dd($friends->toArray());
        return view('friends', [
            'user_id' => $uid,
            'friends' => $friends,
            'tabIndex' => 0,
            'name' => "Friends"]);
    }
}
