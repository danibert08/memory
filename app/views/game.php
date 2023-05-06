<!DOCTYPE html>
<html lang="fr">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="/CSS/reset.css" class="css">
   <link rel="stylesheet" href="/CSS/style.css" class="css">
   <title>Document</title>
</head>
<body id="body">
    <h3>Jeu de mémoire</h3>
    <h6>(Découvrez les cartes 2 par 2 pour reconstituer les paires)</h6>
    <div class="stat">
      <div class="stats">
         <h4><u><?php echo $date ?></u></h4>
         <ul class="champions">
            <li> 
               <?php
              for($i=0;$i<10;$i++){
                  if($monthTab[$i]["name"]){
                     $name =  strtoupper($monthTab[$i]["name"]." ");
                     $score = $monthTab[$i]["score"];
                  }else{
                     $name = "A battre : ";
                     $score = 99;
                  }
                  echo $name . " " . $score  . "<br />";
               }
               ?> 
            </li>
            
         </ul>
      </div>
      <div class="stats">
         <h4><u>Meilleurs scores</u></h4>
         <ul>
               <li> 
                  <?php
                     for($i=0;$i<10;$i++){
                        if($tab[$i]["name"]){
                           $name =  strtoupper($tab[$i]["name"]." ");
                           $score = $tab[$i]["score"];
                        }else{
                           $name = "A battre : ";
                           $score = 99;
                        }
                        echo $name . " " .  $score . "<br />";
                     }
                  ?> 
               </li>
         </ul>
      </div>
   </div>
    <div class="theme">
        <h2>Thème : </h2>
        <div>
        <select name="theme" id="themeChange">
            <option value="default" id="">Défaut</option>
            <option value="terminal" id="terminal">Terminal</option>
            <option value="black-and-white" id="nb">Noir et Blanc</option>
            <option value="f0f" id="f0f">f0f</option>
        </select>
        </div>
    </div>
    <div>   
        <button id="launch">Lancer une partie</button>
    </div>

    <div id="grid">
        <section class="row">
            <div class="cell" id="0"></div>
            <div class="cell" id="1"></div>
            <div class="cell" id="2"></div>
            <div class="cell" id="3"></div>
            <div class="cell" id="4"></div>
            <div class="cell" id="5"></div>
            <div class="cell" id="6"></div>
        </section>
        <section class="row">
            <div class="cell" id="7"></div> 
            <div class="cell" id="8"></div>
            <div class="cell" id="9"></div>
            <div class="cell" id="10"></div>
            <div class="cell" id="11"></div>
            <div class="cell" id="12"></div>
            <div class="cell" id="13"></div>
        </section>
        <section class="row">
            <div class="cell" id="14"></div>  
            <div class="cell" id="15"></div>
            <div class="cell" id="16"></div>
            <div class="cell" id="17"></div>
            <div class="cell" id="18"></div>
            <div class="cell" id="19"></div>
            <div class="cell" id="20"></div>
        </section>
        <section class="row">
            <div class="cell" id="21"></div>
            <div class="cell" id="22"></div>
            <div class="cell" id="23"></div>
            <div class="cell" id="24"></div>
            <div class="cell" id="25"></div>
            <div class="cell" id="26"></div>
            <div class="cell" id="27"></div>
        </section>
    </div>
    <div id="progressBar">
        <div id="bar" class="bar"></div>		
    </div>
    <script src="/JS/app.js"></script>
    <script src="/JS/game.js"></script>
    <script src="/JS/theme.js"></script>
    <script src="/JS/timing.js"></script>
</body>
</html>