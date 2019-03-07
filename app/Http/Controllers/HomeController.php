<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index() {
        return view('home', [
            'user_id' => session('user_id'),
            'tabIndex' => 0,
            'name' => "Home"]);
    }

    public function logout() {
        session()->forget('user_id');

        return view('home', [
            'user_id' => null,
            'tabIndex' => 0,
            'name' => "Home"]);
    }
}
