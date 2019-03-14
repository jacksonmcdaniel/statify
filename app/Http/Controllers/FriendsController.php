<?php

namespace App\Http\Controllers;

use App\Api;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use SpotifyWebAPI;

class FriendsController extends Controller
{

    private const public_token = '6f65c21b83864f0dafc40d16f240a2fd';
    private const private_token = '0935252c7e634097b548663f53c2b082';
    private const callback_url = 'http://localhost:8000/ApiConnection/callback';

    private $user_id;
    private $user_info;
    private $access_token;
    private $refresh_token;


    public function index() {
        $uid = session('user_id');

        $session = new Api();

        //get a list of all users registered in DB, returns as an array of objects, with each object containing a field that is the uri
        $usersFromDB = DB::table('users')
                ->select('users.uri')
                ->get()->values();

        $uriList = array();
        foreach($usersFromDB->all() as $uriObject) {
            $uriList[] = $uriObject->uri;
        }

        //pass array of all users in DB to API function to see if current user follows them
        $checkFriends = $session->api->currentUserFollows('user', $uriList);

        //empty array to contain current user's friends
        $friendsList = array();

        //loop through list to see if user follows, if they follow then add them to friendsList
        for($i = 0; $i < count($checkFriends); $i++ ) {
            if ($checkFriends[$i]) {
                $friendsList[] = $usersFromDB[$i];
            }
        }


        //this gets you an array of arrays, each inner array with one user object. we have to format this
        $friendsFromDB = array();
        foreach ($friendsList as $friend) {
            $friendsFromDB[] = DB::select('
            SELECT users.*
            FROM users
            WHERE uri = ?
            LIMIT 1', [$friend->uri]);
        }

        $friends = array();
        foreach ($friendsFromDB as $innerArray) {
            foreach($innerArray as $user) {
                $friends[] = $user;
            }
        }

        return view('friends', [
            'user_id' => $uid,
            'user_image' => session('user_image'),
            'friends' => \GuzzleHttp\json_encode($friends),
            'tabIndex' => 0,
            'name' => "Friends"]);

    }

    public function show($friendID) {
        session(['friend_id' => $friendID]);
        return redirect("/trends/long_term");
    }


    public function get_friends() {

        //Create api connection
        $api = new SpotifyWebAPI\SpotifyWebAPI();
        $api->setReturnType(SpotifyWebAPI\SpotifyWebAPI::RETURN_ASSOC);
        $api->setAccessToken($this->access_token);

    }


}
