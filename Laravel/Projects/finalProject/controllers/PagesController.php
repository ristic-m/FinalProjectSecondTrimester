<?php

namespace App\Controllers;
use App\Core\App;

class PagesController
{
    public function home()
    {
        check_auth();
        $tasks = App::get('database')->selectAll('tasks');
        $users = App::get('database')->selectAll('users');

        foreach ($tasks as $task){
            $userId = $task->user_id;

            foreach ($users as $user){
                if($user->id === $userId){
                    unset($user->password);
                    $task->user = $user;
                }
            }
        }

        return view('index',compact('tasks'));
    }
}