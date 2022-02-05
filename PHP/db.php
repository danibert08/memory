<?php

   $dsn = 'mysql:host=127.0.0.1;dbname=memory'; 
   $user = 'root';
   $pass = 'root'; 
   
   $pdo = new PDO($dsn, $user, $pass);
   
   $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);