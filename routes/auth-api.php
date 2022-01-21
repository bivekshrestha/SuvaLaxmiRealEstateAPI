<?php

Route::group(['namespace' => 'frontend\auth', 'prefix' => 'auth'], function () {
    Route::post('login', 'AuthController@login');

    Route::group([
        'middleware' => 'jwt.auth'
    ], function () {
        Route::get('logout', 'AuthController@logout');
        Route::get('user', 'AuthController@user');
    });
});
