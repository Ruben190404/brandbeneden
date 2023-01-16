<?php

namespace Database\Factories;

use App\Models\Sprint;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Task;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $child = $this->faker->randomElement(Task::all()->pluck('id')->toArray());
            if (!$child) {
                $child = 0;
            }
        return [
            'title' => $this->faker->name(),
            'description' => $this->faker->word(),
            'user_id' => $this->faker->randomElement(User::all()->pluck('id')->toArray()),
            'sprint_id' => $this->faker->randomElement(Sprint::all()->pluck('id')->toArray()),
            'priority' => $this->faker->randomElement([1, 2, 3]),
            'status' => $this->faker->randomElement([1, 2, 3]),
            'spend_time' => $this->faker->randomElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
            'estimated_time' => $this->faker->randomElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
            'task_id' => $child,
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return static
     */
    public function unverified()
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
            'task_id' => 0,
        ]);
    }
}
