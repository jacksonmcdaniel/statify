<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

use App\User;

class AccountController extends Controller
{
    public function index() {
        $userInfo = User::getUserInfo(session('user_id'));

        return view('account', [
            'user_id' => session('user_id'),
            'username' => $userInfo->name,
            'email' => $userInfo->email,
            'tabIndex' => 0,
            'name' => "Account"]);
    }

    public function destroy() {

        //delete account

        return redirect('/home/logout');
    }
}
