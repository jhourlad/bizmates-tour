<?php

use Illuminate\Support\Facades\Route;

//Auth::routes();

Route::get('/{any}', \App\Http\Controllers\DefaultController::class)->where('any', '.*');
