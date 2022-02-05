<?php


   $dsn = 'mysql:host=franceexuzdaniel.mysql.db;dbname=franceexuzdaniel'; //?serverVersion=mariaDB-10.3.31
   $user = 'franceexuzdaniel';
   $pass = 'Ereul9Aeng'; 
   
   $pdo = new PDO($dsn, $user, $pass);
   
   $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);