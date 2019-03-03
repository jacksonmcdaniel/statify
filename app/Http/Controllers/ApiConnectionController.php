<?php

namespace App\Http\Controllers;

use vendor\autoload;
use SpotifyWebAPI;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class ApiConnectionController extends Controller {

    public function index() {
        $session = new SpotifyWebAPI\Session(
            '6f65c21b83864f0dafc40d16f240a2fd',
            '0935252c7e634097b548663f53c2b082',
            'http://localhost:8000/ApiConnection/callback'
        );

        $options = [
            'show_dialog' => true,
            'scope' => [
                'playlist-read-private',
                'user-read-private',
                'user-top-read',
                'user-read-recently-played',
                'user-read-email'
            ],
        ];

        header('Location: ' . $session->getAuthorizeUrl($options));
        die();
    }

    
    public function callback() {
        $session = new SpotifyWebAPI\Session(
            '6f65c21b83864f0dafc40d16f240a2fd',
            '0935252c7e634097b548663f53c2b082',
            'http://localhost:8000/ApiConnection/callback'
        );

		$session->requestAccessToken($_GET['code']);

		$accessToken = $session->getAccessToken();
		$refreshToken = $session->getRefreshToken();

        $this->spotify_api($accessToken, $refreshToken);

		//Send the user along and fetch some data!
		header('Location: /trends');
        die();
    }

    public function spotify_api($accessToken, $refreshToken) {
        //Create api connection
        $api = new SpotifyWebAPI\SpotifyWebAPI();
        $api->setReturnType(SpotifyWebAPI\SpotifyWebAPI::RETURN_ASSOC);
        $api->setAccessToken($accessToken);

        //get the email of the current user
        $user = $api->me();
        $email = $user['email'];
        $users = DB::select('select * from users where email = ?', [$email]);

        //If no users exist with this email, insert the information into the database
        if (sizeof($users) == 0) {
            DB::insert('insert into users (access_token, refresh_token, email) values (?, ?, ?)',
                [$accessToken, $refreshToken, $email]);
        }

        $users = DB::select('select * from users where email = ?', [$email]);
        session(['uid' => $users['uid']]);

    }

}
