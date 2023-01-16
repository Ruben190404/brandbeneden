<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Sprint extends Model
{
    use HasFactory;


    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    use SoftDeletes;
    protected $fillable = ['title', 'goal', 'start_date', 'end_date', 'project_id'];

}
