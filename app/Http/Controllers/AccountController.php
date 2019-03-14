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
            'user_image' => session('user_image'),
            'username' => $userInfo->name,
            'email' => $userInfo->email,
            'accountImage' => $userInfo->image,
            'tabIndex' => 0,
            'name' => "Account"]);
    }

    public function destroy() {
        $this->delete_account(session('user_id'));

        return redirect('/home/logout');
    }

    public function delete_account($user_id) {
        DB::delete('DELETE FROM users WHERE user_id=?', [$user_id]);
    }
}
