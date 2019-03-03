<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index() {
        $uid = session('uid');

        return view('home', [
            'uid' => $uid,
            'tabIndex' => 0,
            'name' => "Home"]);
    }

    public function logout() {
        session()->forget('uid');

        return view('home', [
            'uid' => null,
            'tabIndex' => 0,
            'name' => "Home"]);
    }
}
