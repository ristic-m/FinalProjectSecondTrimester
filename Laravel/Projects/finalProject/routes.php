<?php

// PagesController routes
$router->get('','PagesController@home');

/** User routes */
$router->get('users/show','UsersController@showOneUser');
$router->get('users','UsersController@showUsers');
$router->get('users/edit','UsersController@showEditUserPage');
$router->get('delete','UsersController@delete');
$router->post('users/edit','UsersController@update');

/** Auth routes */
$router->get('register','AuthController@showRegisterForm');
$router->get('/login','AuthController@showLoginPage');
$router->get('/logout','AuthController@logout');

$router->post('register','AuthController@register');
$router->post('login','AuthController@login');

/** Api routes */
//$router->get('api/users',"UsersController@getUsersApi");
$router->get('api/songs','SongsController@getSongsApi');
$router->get('api/artists','ArtistsController@getArtistsApi');
$router->get('api/genres','GenresController@getGenresApi');

$router->get('songs/delete','SongsController@songsDelete');

$router->get('songs','SongsController@showSongs');







/**  */