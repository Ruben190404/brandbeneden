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

Route::get('/projects', [ProjectController::class, 'index']);

Route::get('/projects/{id}', [ProjectController::class, 'show']);
//Tasks Routes
Route::get('/tasks', [\App\Http\Controllers\TaskController::class, 'index']);
Route::get('/tasks/{sprintId}', [\App\Http\Controllers\TaskController::class, 'getTasksBySprint']);
Route::post('/add-task', [\App\Http\Controllers\TaskController::class, 'store']);
Route::put('/update-task/{task}', [\App\Http\Controllers\TaskController::class, 'update']);

Route::post('/projects/store', [ProjectController::class, 'store']);

Route::put('/projects/update/{project}', [ProjectController::class, 'update']);

Route::put('/projects/delete/{project}', [ProjectController::class, 'delete']);
//Sprint Routes
Route::post('/add-sprint', [\App\Http\Controllers\SprintController::class, 'store']);
