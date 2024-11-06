<?php

/** @var \Laravel\Lumen\Routing\Router $router tes */

$router->get('/', function () use ($router) {
    return response()->json([
        'versi' => $router->app->version(),
        'welcome' => 'Selamat datang di API Lumen'
    ]);
});

$router->get('/cart', 'CartController@index');
$router->get('/cart/{id}', 'CartController@show');
