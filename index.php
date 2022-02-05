<?php 
require __DIR__.'/PHP/db.php';

$ins = $pdo->prepare("select * from datas order by score limit 5");
$ins->setFetchMode(PDO::FETCH_ASSOC);
$ins->execute(); 
$tab = $ins->fetchAll();

require __DIR__.'/PHP/game.php';

