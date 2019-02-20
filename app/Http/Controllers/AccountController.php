<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class AccountController extends Controller
{
    public function index() {
        $uid = session('uid');
        $userInfo = DB::table('users')
            ->select('uid', 'name', 'email')
            ->get()
            ->where('uid', '=', $uid)
            ->first();

        return view('account', [
            'username' => $userInfo->name,
            'email' => $userInfo->email,
            'tabIndex' => 0,
            'name' => "Account"]);
    }
}
