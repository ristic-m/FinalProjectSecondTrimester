<?php

namespace App\Controllers;

use App\Core\App;
class GenresController
{
    public function getGenresApi()
    {
        $genres = App::get('database')->selectAll('genres');

        echo json_encode($genres);
    }

}