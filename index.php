<?php 
require __DIR__.'/PHP/db.php';
$score = null;
    if(isset($_GET['score']) && ($_GET['score']) > 0){
    $score = $_GET['score'];
    $insertQuery  = $pdo->prepare ( "
        INSERT INTO datas (score)
        VALUES (:score)"
        );
    $insertQuery->execute(array(":score"=>"{$score}"));
    reset($_GET['score']);
}

$ins = $pdo->prepare("select * from datas order by score limit 5");
$ins->setFetchMode(PDO::FETCH_ASSOC);
$ins->execute(); 
$tab = $ins->fetchAll();


       
require __DIR__.'/PHP/game.php';

