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
        $validatedData = $this->validate();
        $project = Project::create($validatedData);

        $project->save();
    }
}
