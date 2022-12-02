<?php

namespace App\Http\Controllers;

use App\Models\Sprint;
use Illuminate\Http\Request;

class SprintController extends Controller
{
    public function index() {}

    public function store(Request $request) {

//        $validated = $request->validate([
//            'title' => 'required|min:1',
//            'goal' => 'required|min:1',
//            'start_date' => 'required|date',
//            'end_date' => 'required|date',
//            'project_id' => 'required|min:1',
//        ]);

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
}