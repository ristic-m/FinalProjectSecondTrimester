<?php

namespace App\Controllers;

use App\Core\App;
class ArtistsController

{
    public function getArtistsApi()
    {
        $artists = App::get('database')->selectAll('artists');

        echo json_encode($artists);
    }
}