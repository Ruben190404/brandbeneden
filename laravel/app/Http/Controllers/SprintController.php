<?php

namespace App\Http\Controllers;

use App\Models\Sprint;
use App\Models\Task;
use Illuminate\Http\Request;

class SprintController extends Controller
{
    public function index()
    {
        $sprints = Sprint::orderby('start_date', 'asc')->get();

        return response()->json([
            'status' => true,
            'sprints' => $sprints
        ]);
    }

    public function store(Request $request)
    {
        $sprint = new Sprint();
        $sprint->title = $request->input('title');
        $sprint->goal = $request->input('goal');
        $sprint->start_date = $request->input('start_date');
        $sprint->end_date = $request->input('end_date');
        $sprint->project_id = $request->input('project_id');
        $sprint->save();

        return response()->json([
            'status' => true,
            'message' => 'New Sprint',
        ]);
    }

    public function edit(Sprint $sprint)
    {
        return response()->json([
            'status' => true,
            'sprint' => $sprint
        ]);
    }

    public function update(Request $request, Sprint $sprint)
    {
        $sprint->title = $request->input('title');
        $sprint->goal = $request->input('goal');
        $sprint->start_date = $request->input('start_date');
        $sprint->end_date = $request->input('end_date');
        $sprint->project_id = $request->input('project_id');
        $sprint->save();

        return response()->json([
            'status' => true,
            'message' => 'Sprint updated'
        ]);
    }

    public function delete(Sprint $sprint, Request $request)
    {
        $sprint->deleted_at = $request->input('soft_delete');

        $sprint->save();
    }
}
