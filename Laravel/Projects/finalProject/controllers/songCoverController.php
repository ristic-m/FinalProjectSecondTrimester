<?php

namespace App\Controllers;

use App\Core\App;
class SongCoverController
{
    public function getSongCoverApi()
    {
        $songCover = App::get('database')->selectAll('songCover');

        echo json_encode($songCover);
    }
}