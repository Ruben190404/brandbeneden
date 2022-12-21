<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\Sprint;
use Illuminate\Http\Request;

class TaskController extends Controller
{
//->orderby('id', 'desc')

    public function index($id)
    {
        $tasks = Task::where('sprint_id', $id)->orderby('id', 'desc')->get();
        return response()->json([
            'status' => true,
            'tasks' => $tasks
        ]);
    }

    public function store(Request $request)
    {
        $task = new Task;
        $task->title = $request->input('title');
        $task->description = $request->input('description');
        $task->user_id = $request->input('user_id');
        $task->priority = $request->input('priority');
        $task->status = $request->input('status');
        $task->spend_time = $request->input('spend_time');
        $task->estimated_time = $request->input('estimated_time');
        $task->sprint_id = $request->input('sprint_id');
        $task->task_id = $request->input('task_id');
        $task->save();

        return response()->json([
            'status' => true,
            'message'=>'New task weyghj,zdhvgzfjdkjmndguhj',
        ]);
    }

    public function update(Request $request, Task $task)
    {
        $task->title = $request->input('title');
        $task->description = $request->input('description');
        $task->user_id = $request->input('user_id');
        $task->priority = $request->input('priority');
        $task->status = $request->input('status');
        $task->spend_time = $request->input('spend_time');
        $task->estimated_time = $request->input('estimated_time');
        $task->sprint_id = $request->input('sprint_id');
        $task->task_id = $request->input('task_id');
        $task->save();

        return response()->json([
            'status'=> true,
            'message'=>'updated',
        ]);
    }
}
