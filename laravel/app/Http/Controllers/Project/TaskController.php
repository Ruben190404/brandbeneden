<?php

namespace App\Http\Controllers\Project;

use App\Models\Project;
use App\Http\Controllers\Controller;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index(): \Illuminate\Http\Response|\Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory
    {
        $tasks = Task::all();

        return response($tasks);
    }
}
