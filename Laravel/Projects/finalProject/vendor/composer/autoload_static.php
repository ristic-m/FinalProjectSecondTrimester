<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitee5a0de37b8b47eca6eff7dba7b311b4
{
    public static $classMap = array (
        'App\\Controllers\\ArtistsController' => __DIR__ . '/../..' . '/controllers/ArtistsController.php',
        'App\\Controllers\\AuthController' => __DIR__ . '/../..' . '/controllers/AuthController.php',
        'App\\Controllers\\GenresController' => __DIR__ . '/../..' . '/controllers/GenresController.php',
        'App\\Controllers\\PagesController' => __DIR__ . '/../..' . '/controllers/PagesController.php',
        'App\\Controllers\\SongCoverController' => __DIR__ . '/../..' . '/controllers/songCoverController.php',
        'App\\Controllers\\SongsController' => __DIR__ . '/../..' . '/controllers/SongsController.php',
        'App\\Controllers\\UsersController' => __DIR__ . '/../..' . '/controllers/UsersController.php',
        'App\\Core\\App' => __DIR__ . '/../..' . '/core/App.php',
        'App\\Core\\Request' => __DIR__ . '/../..' . '/core/Request.php',
        'App\\Core\\Router' => __DIR__ . '/../..' . '/core/Router.php',
        'ComposerAutoloaderInitee5a0de37b8b47eca6eff7dba7b311b4' => __DIR__ . '/..' . '/composer/autoload_real.php',
        'Composer\\Autoload\\ClassLoader' => __DIR__ . '/..' . '/composer/ClassLoader.php',
        'Composer\\Autoload\\ComposerStaticInitee5a0de37b8b47eca6eff7dba7b311b4' => __DIR__ . '/..' . '/composer/autoload_static.php',
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'Connector' => __DIR__ . '/../..' . '/core/database/Connector.php',
        'QueryBuilder' => __DIR__ . '/../..' . '/core/database/QueryBuilder.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInitee5a0de37b8b47eca6eff7dba7b311b4::$classMap;

        }, null, ClassLoader::class);
    }
}
