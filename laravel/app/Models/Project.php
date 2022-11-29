<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'start_date',
        'end_date',
    ];

    protected $attributes = [
        'title' => '',
        'start_date' => '',
        'end_date' => '',
    ];

    public function users()
    {
        return $this->belongsToMany(User::class, 'project_users');
    }
}
