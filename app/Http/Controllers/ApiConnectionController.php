<?php

namespace App\Http\Controllers;

use vendor\autoload;
use SpotifyWebAPI;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\User;

class ApiConnectionController extends Controller {

   private const public_token = '6f65c21b83864f0dafc40d16f240a2fd';
   private const private_token = '0935252c7e634097b548663f53c2b082';
   private const callback_url = 'http://localhost:8000/ApiConnection/callback';

   private $user_id;
   private $user_info;
   private $access_token;
   private $refresh_token;
   
   public function index() {
      $session = $this->get_api_session();

      $options = [
         'show_dialog' => true,
         'scope' => [
            'playlist-read-private',
            'user-read-private',
            'user-top-read',
            'user-read-recently-played',
            'user-read-email',
            'playlist-modify-private'
         ],
      ];

      header('Location: ' . $session->getAuthorizeUrl($options));
      die();
    }
    
   public function callback() {
      $session = $this->get_api_session();

      if (!array_key_exists('code', $_GET)) {
         return redirect('/home');
      }


	   $session->requestAccessToken($_GET['code']);
      
      $this->access_token = $session->getAccessToken();
      $this->refresh_token = $session->getRefreshToken();
      
      $this->register_user();
      return redirect('/loading');
   }

   public function register_user() {
      //Create api connection
      $api = new SpotifyWebAPI\SpotifyWebAPI();
      $api->setReturnType(SpotifyWebAPI\SpotifyWebAPI::RETURN_ASSOC);
      $api->setAccessToken($this->access_token);

      //get the email of the current user
      $this->user_info = $api->me();
      $user_id = $this->get_user_id_db();

      //If no users exist with this email, insert the information into the database
      if (!array_key_exists(0, $user_id)) {
         $this->insert_new_user();
      }
      //If user already exists, replace the access and refresh tokens in DB with the new ones
      else {
         $this->update_existing_user();
      }
      
      session(['user_id' => $this->get_user_id_db()[0]->user_id,
               'user_image' => $this->get_user_image_db()[0]->image
               ]);
   }
   
   public function get_user_id_db() {
      return DB::select('select user_id from users where email = ?', 
         [$this->user_info['email']]);
   }

   public function get_user_image_db() {
      return DB::select('select image from users where email = ?', 
         [$this->user_info['email']]);
   }

   public function insert_new_user() {

      if ($this->user_info['images'] == null) {
      DB::insert('insert into users (access_token, refresh_token, name, email, uri) values (?, ?, ?, ?, ?)',
          [$this->access_token, $this->refresh_token, $this->user_info['display_name'], 
          $this->user_info['email'], $this->user_info['uri']]);
      } else {
      DB::insert('insert into users (access_token, refresh_token, name, email, uri, image) values (?, ?, ?, ?, ?, ?)',
          [$this->access_token, $this->refresh_token, $this->user_info['display_name'], 
          $this->user_info['email'], $this->user_info['uri'], $this->user_info['images'][0]['url']]);
      }
   }

   public function update_existing_user() {
      DB::update('update users set access_token = ?, refresh_token = ? where email = ?',
         [$this->access_token, $this->refresh_token, $this->user_info['email']]);
   }

   public function get_api_session() {
      return new SpotifyWebAPI\Session(
         self::public_token,
         self::private_token,
         self::callback_url
      );
   }
}
