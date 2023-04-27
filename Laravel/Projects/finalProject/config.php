<?php
return [
    'database'=>[
        'servername'=>'localhost',
        'user'=>'root',
        'pass'=>'',
        'dbname'=>'final_schema',
        "options"=>[
            PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION
        ]
    ]
];