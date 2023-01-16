<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Project\ProjectController;
use Laravel\Socialite\Facades\Socialite;


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



Route::group(['middleware' => ['auth:sanctum']], function () {

  //Tasks Routes
  Route::get('/sprint/{id}', [\App\Http\Controllers\TaskController::class, 'index']);
  Route::post('/add-task', [\App\Http\Controllers\TaskController::class, 'store']);
  Route::put('/update-task/{task}', [\App\Http\Controllers\TaskController::class, 'update']);
  Route::put('/delete-task/{task}', [\App\Http\Controllers\TaskController::class, 'delete']);
  Route::get('/tasks/{sprintId}', [\App\Http\Controllers\TaskController::class, 'getTasksBySprint']);

  //Sprint Routes
  Route::get('/sprints', [\App\Http\Controllers\SprintController::class, 'index']);
  Route::post('/add-sprint', [\App\Http\Controllers\SprintController::class, 'store']);
  Route::get('/edit-sprint/{sprint}', [\App\Http\Controllers\SprintController::class, 'edit']);
  Route::put('/update-sprint/{sprint}', [\App\Http\Controllers\SprintController::class, 'update']);
  Route::put('/delete-sprint/{sprint}', [\App\Http\Controllers\SprintController::class, 'delete']);
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
});
