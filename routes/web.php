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
Route::get('/home', 'HomeController@index');
Route::get('/', 'HomeController@index');
Route::get('/trends', 'TrendController@index');
Route::get('/trends/{tid}', 'TrendController@show');
Route::get('/recommendations', 'RecommendationController@index');
Route::get('/ApiConnection', 'ApiConnectionController@index');
Route::get('/ApiConnection/callback', 'ApiConnectionController@callback');
