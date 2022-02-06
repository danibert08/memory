<?php 
   require __DIR__.'/db.php'; // On appelle pdo

   //On récupère les meilleurs temps
   $ins = $pdo->prepare("select * from datas order by score limit 5");
   $ins->setFetchMode(PDO::FETCH_ASSOC);
   $ins->execute(); 
   $tab = $ins->fetchAll();

    
   // Si l'on a un compteur à enregistrer, on le compare aux meilleurs temps
    if(isset($_GET['score']) && ($_GET['score']) > 0){ 
        for($i=0;$i<count($tab);$i++){
            if($_GET['score'] < $tab[$i]['score']){ // On en le sauvegarde que s'il rentre dans les 5 meilleurs
                $score = $_GET['score'];
                $insertQuery  = $pdo->prepare ( "
                    INSERT INTO datas (score)
                    VALUES (:score)"
                    );
                $insertQuery->execute(array(":score"=>"{$score}"));
                break;
            }
        }
        unset($_GET); // On vide la variable $_GET
        header("location:../index.php"); // on redirrige vers index.php
   }