<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public $title;
    public $start_date;
    public $end_date;

    protected $rules = [
        'title' => 'required',
        'start_date' => 'required',
        'end_date' => 'required',
    ];

    public function index()
    {
        $projects = Project::all();
        return response()->json([
            'status' => 'success',
            'projects' => $projects
        ]);
    }

    public function show($id)
    {
        $project = Project::find($id);

        return response()->json([
            'status' => 'success',
            'project' => $project
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required | min:3',
            'start_date' => 'required | date',
            'end_date' => 'required | date | after:start_date',
        ]);

        $project = new Project();
        $project->title = $request->title;
        $project->start_date = $request->start_date;
        $project->end_date = $request->end_date;
        $project->save();
    }

    public function update(Project $project, Request $request) // updates a project in the database
    {

        $project->title = $request->input('title');
        $project->start_date = $request->input('start_date');
        $project->end_date = $request->input('end_date');

        $project->save();
    }



    public function delete(Project $project, Request $request)
    {
        $project->deleted_at = $request->input('soft_delete');

        $project->save();
    }
}
