<?php

namespace Database\Factories;

use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class SprintFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            // fill field for sprint table model
            'title' => $this->faker->name(),
            'goal' => $this->faker->word(),
            'start_date' => $this->faker->dateTimeBetween('-1 day', 'now'),
            'end_date' => $this->faker->dateTimeBetween('now', '+2 weeks'),
            'project_id' => $this->faker->randomElement(Project::all()->pluck('id')->toArray()),
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
        ]);
    }
}
