<?php

namespace App\Http\Controllers\Project;

use App\Models\Project;
use App\Http\Controllers\Controller;
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
}
