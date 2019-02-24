<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

use App\User;

class AccountController extends Controller
{
    public function index() {
        $uid = session('uid');
        
        $userInfo = User::getUserInfo($uid);

        return view('account', [
            'username' => $userInfo->name,
            'email' => $userInfo->email,
            'tabIndex' => 0,
            'name' => "Account"]);
    }
}
