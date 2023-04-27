<?php

namespace App\Controllers;

use App\Core\App;
class SongsController
{
    public function getSongsApi()
    {
        $songs = App::get('database')->selectAll('songs');

        echo json_encode($songs);
    }

    public function songsDelete()
    {
        $id = $_GET['id'];

        App::get('database')->delete('songs', ['id' => $id]);

        redirect("/songs");
    }


    public function showSongs()
    {

        $songs = App::get('database')->selectAll('songs');

        return view('allSongs',compact('songs'));
    }


}