<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->longText('description');
            $table->integer('user_id');
            $table->unsignedBigInteger('sprint_id');
            $table->integer('priority');
            $table->integer('status');
            $table->integer('spend_time');
            $table->integer('estimated_time');
            $table->integer('task_id');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('sprint_id')->references('id')->on('sprints');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tasks');
    }
};
