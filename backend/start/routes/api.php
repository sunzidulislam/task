<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::post('/login', [AuthController::class, 'login']);


Route::middleware('auth:api')->group(function () {
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);

    // Example protected route
    Route::get('/products', [ProductController::class, 'index']);
});



// (Optional) You can add public product routes here if needed, e.g.,
// Route::get('/products', [ProductController::class, 'index']);
