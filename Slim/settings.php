<?php
return [
    'settings' => [
        'displayErrorDetails' => true, // set to false in production

        // Renderer settings
        'renderer' => [
            'template_path' => __DIR__ . '/../templates/',
        ],

        // Monolog settings
        'logger' => [
            'name' => 'slim-app',
            'path' => __DIR__ . '/../logs/app.log',
        ],

        'gem' => [
            'username' => 'gem',         
            'password' => 'qwe123',              
            'host' => 'localhost',              
            'dbname' => 'gem',          
            'db' => 'mysql',
        ],
    ],
],
