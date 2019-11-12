<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

Route::get('get', 'UserController@get');//mostra todos os dados
/*
php artisan serve -- > para subir a aplicação
php artisan passport:install --> para criar o token de acesso 
*/
//nao precisa de autorizacao
Route::prefix('auth')->group(function () {
    //login e register
    Route::post('login', 'Auth\AuthController@login')->name('login');
    Route::post('register', 'Auth\AuthController@register');
    Route::put('updateuser', 'Auth\AuthController@updateuser');
    Route::put('updatepassword', 'Auth\AuthController@updatepassword');
    Route::post('checkpassword', 'Auth\AuthController@checkpassword');
    Route::post('getusers', 'Auth\AuthController@getusers');
    Route::post('getusercargo', 'Auth\AuthController@getusercargo');
    Route::post('getbyemail', 'Auth\AuthController@getbyemail');
    Route::get('getalluser', 'Auth\AuthController@getalluser');
    Route::post('getnome', 'Auth\AuthController@getnome');
    //familia
    Route::post('familia', 'Auth\AuthController@familia');
    Route::post('getfamilia', 'Auth\AuthController@getfamilia');

    //info
    Route::post('informativo', 'Auth\AuthController@informativo');
    Route::get('getinfo', 'Auth\AuthController@getinfo');
    Route::get('getallinfo', 'Auth\AuthController@getallinfo');
    Route::post('getnivelinfo', 'Auth\AuthController@getnivelinfo');
    Route::put('updateinfo', 'Auth\AuthController@updateinfo');
    
    //ordem
    Route::post('ordem', 'Auth\AuthController@ordem');
    Route::get('getordem', 'Auth\AuthController@getordem');
    Route::post('getnivelordem', 'Auth\AuthController@getnivelordem');
    Route::get('getallordem', 'Auth\AuthController@getallordem');
    Route::put('updateordem', 'Auth\AuthController@updateordem');

    //cargo
    Route::get('getcargos','Auth\AuthController@getcargos');
    Route::post('getidcargos','Auth\AuthController@getidcargos');

    //reuniao
    Route::post('createreuniao', 'Auth\AuthController@createreuniao');
    Route::get('reuniao', 'Auth\AuthController@reuniao');
    
    //lista de presenca
    Route::post('listapresenca', 'Auth\AuthController@listapresenca');
    Route::get('getlista', 'Auth\AuthController@getlista');
    Route::post('getalllista', 'Auth\AuthController@getalllista');
    Route::put('updatelista', 'Auth\AuthController@updatelista');
    Route::post('getconfirmacao', 'Auth\AuthController@getconfirmacao');

    //reuniao
    Route::get('getreuniao', 'Auth\AuthController@getreuniao');
    Route::get('getallreuniao', 'Auth\AuthController@getallreuniao');
    
    //agape
    Route::post('agape', 'Auth\AuthController@agape');
    Route::get('getagape', 'Auth\AuthController@getagape');
    Route::get('getallagape', 'Auth\AuthController@getallagape');
    Route::put('updateagape', 'Auth\AuthController@updateagape');

    //avental
    Route::get('getavental', 'Auth\AuthController@getavental');

    //financeiro
    Route::post('financeiro', 'Auth\AuthController@financeiro');
    Route::get('getadminfinanceiro', 'Auth\AuthController@getadminfinanceiro');
    Route::post('getfinanceiro', 'Auth\AuthController@getfinanceiro');
    Route::post('getallfinanceiro', 'Auth\AuthController@getallfinanceiro');
    Route::put('updatefinanceiro', 'Auth\AuthController@updatefinanceiro');

    //mural
    Route::post('mural', 'Auth\AuthController@mural');
    Route::get('getmural', 'Auth\AuthController@getmural');
    Route::put('updatemural', 'Auth\AuthController@updatemural');
    Route::put('deletemural', 'Auth\AuthController@deletemural');

    
    //precisa de autorizacao
    Route::middleware(['auth:api'])->group(function () {
        Route::get('logout', 'Auth\AuthController@logout');
        Route::get('user', 'Auth\AuthController@user');
    });
});

        
    
