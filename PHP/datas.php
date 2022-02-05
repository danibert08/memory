<?php 
   require __DIR__.'/db.php'; // On appelle pdo
   // Si l'on a un compteur à enregistrer, on l'insère en bdd
    if(isset($_GET['score']) && ($_GET['score']) > 0){ 
        $score = $_GET['score'];
        $insertQuery  = $pdo->prepare ( "
            INSERT INTO datas (score)
            VALUES (:score)"
            );
        $insertQuery->execute(array(":score"=>"{$score}"));
        unset($_GET); // On vide la variable $_GET
        header("location:../index.php"); // on redirrige vers index.php
   }