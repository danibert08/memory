<?php

/*
To map your routes, use this code

$this->addRoute(
    $httpMethod,
    $url,
    $controllerName,
    $methodName,
    $routeName
);
*/

// Example for the home
$this->addRoute(
    'GET', // HTTP Method
    '/', // URL pattern
    'MainController', // Controller name
    'home', // Method name
    'main-home' // => route's name (for URL generation)
);

$this->addRoute(
   'GET', // HTTP Method
   '/datas/[i:score]', // URL pattern
   'MainController', // Controller name
   'checkScore', // Method name
   'main-checkScore' // => route's name (for URL generation)
);



