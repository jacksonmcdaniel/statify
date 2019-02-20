<?php
/**
 * Created by PhpStorm.
 * User: caseydaly
 * Date: 2019-02-14
 * Time: 17:38
 */

namespace App\Http\Controllers;

use vendor\autoload;
use SpotifyWebAPI;

class ApiConnectionController
{

    public function index() {

        $session = new SpotifyWebAPI\Session(
            '6f65c21b83864f0dafc40d16f240a2fd',
            '0935252c7e634097b548663f53c2b082',
            'http://localhost:8000/callback'
        );

        $options = [
            'scope' => [
                'playlist-read-private',
                'user-read-private',
            ],
        ];

        $user = "casey";

        header('Location: ' . $session->getAuthorizeUrl($options));
        die();
//        return view('welcome', ['name' => $user]);
    }

}