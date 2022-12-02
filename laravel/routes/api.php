<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Project\ProjectController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Tasks Routes
Route::get('/tasks', [\App\Http\Controllers\TaskController::class, 'index']);
Route::post('/add-task', [\App\Http\Controllers\TaskController::class, 'store']);

//Sprint Routes
Route::post('/add-sprint', [\App\Http\Controllers\SprintController::class, 'store']);
