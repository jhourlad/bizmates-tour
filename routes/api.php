<?php

use Illuminate\Support\Facades\Route;

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::resource('venue', \App\Http\Controllers\Api\VenueController::class);
