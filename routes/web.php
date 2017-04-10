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

Route::get('/', function () {
    return view('welcome');
});
Route::get('/messages', 'MessagesController@index');
Route::post('/messages', 'MessagesController@store');
Route::get('/get_auth_user', function () {
  return auth()->user();
});

Auth::routes();

Route::get('/home', 'HomeController@index');
