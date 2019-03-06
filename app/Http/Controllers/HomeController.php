<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;

class HomeController extends Controller
{
    public function index() {
        $uid = session('uid');

        if ($uid == null) {
            return view('home', [
                'uid' => $uid,
                'username' => "",
                'tabIndex' => 0,
                'name' => "Home"]);
        }
        $userInfo = User::getUserInfo($uid);

        return view('home', [
            'uid' => $uid,
            'username' => $userInfo->name,
            'tabIndex' => 0,
            'name' => "Home"]);
    }

    public function logout() {
        session()->forget('uid');
        
        return redirect('/home');
    }
}
