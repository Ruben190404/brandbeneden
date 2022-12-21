<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
Route::get('/sprint/{id}', [\App\Http\Controllers\TaskController::class, 'index']);
Route::post('/add-task', [\App\Http\Controllers\TaskController::class, 'store']);
Route::put('/update-task/{task}', [\App\Http\Controllers\TaskController::class, 'update']);

//Sprint Routes
Route::get('/sprints', [\App\Http\Controllers\SprintController::class, 'index']);
Route::post('/add-sprint', [\App\Http\Controllers\SprintController::class, 'store']);
Route::get('/currentsprint', [\App\Http\Controllers\SprintController::class, 'currentSprint']);
Route::get('/sprintData/{id}', [\App\Http\Controllers\SprintController::class, 'sprintData']);

//Project Routes
Route::get('/projects', [\App\Http\Controllers\ProjectController::class, 'index']);
Route::get('/projects/{id}', [\App\Http\Controllers\ProjectController::class, 'show']);
Route::post('/projects/store', [\App\Http\Controllers\ProjectController::class, 'store']);
Route::put('/projects/update/{project}', [\App\Http\Controllers\ProjectController::class, 'update']);
Route::put('/projects/delete/{project}', [\App\Http\Controllers\ProjectController::class, 'delete']);

//User Routes
Route::get('/users', [\App\Http\Controllers\UserController::class, 'index']);
