<?php

require '../../vendor/autoload.php';

$session = new SpotifyWebAPI\Session(
'6f65c21b83864f0dafc40d16f240a2fd',
'0935252c7e634097b548663f53c2b082',
'http://localhost:8000/callback'
);

// Request a access token using the code from Spotify
$session->requestAccessToken($_GET['code']);

$accessToken = $session->getAccessToken();
$refreshToken = $session->getRefreshToken();

// Store the access and refresh tokens somewhere. In a database for example.

// Send the user along and fetch some data!
header('Location: app.php');
die();