<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/account', 'AccountController@index');
//Route::patch('/account/{aid}', 'AccountController@update');
Route::get('/account/delete', 'AccountController@destroy');
Route::get('/home', 'HomeController@index');
Route::get('/home/logout', 'HomeController@logout');
Route::get('/', 'HomeController@index');
Route::get('/trends', 'TrendController@index');
Route::get('/trends/{tid}', 'TrendController@show');
Route::get('/recommendations', 'RecommendationController@index');
Route::get('/friends', 'FriendsController@index');
Route::get('/ApiConnection', 'ApiConnectionController@index');
Route::get('/ApiConnection/callback', 'ApiConnectionController@callback');
Route::get('/loading', 'LoadingController@index');
Route::get('/loading/{type}', 'LoadingController@show');
Route::get('/artists', 'ArtistController@index');
Route::get('/artists/{tid}', 'ArtistController@show');
Route::get('/recommendations/playlist', 'RecommendationController@playlistButton');

