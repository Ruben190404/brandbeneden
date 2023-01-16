<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Sprint;
use Illuminate\Database\Seeder;

class SprintSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
    // create tasks
        Sprint::factory()->count(6)->create();
    }
}
