<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Project;
use App\Models\Sprint;
use App\Models\Task;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // TODO: remove when finished

        for ($i = 0; $i < 50; $i++) {

            $admin = false;
            $number = rand(0, 10);

            if ($number === 10) {
                $admin = true;
            }

            DB::table('users')->insert([
                'name' => Str::random(10).$i,
                'email' => Str::random(10).'@gmail.com',
//                'password' => Hash::make('password'),
                'is_admin' => $admin,
            ]);
        }

    }
}
