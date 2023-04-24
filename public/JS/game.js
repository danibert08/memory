const game = {
   name: "",
   // Pour générer le plateau de jeu nous créons un tableau qui contiendra chaque image en double
   imagesName: [],
   imgElements: document.getElementsByTagName('img'),
   cells: document.getElementsByClassName('cell'),  // On récupère les cases du plateau de jeu
   // On créé un tableau vide d'items à comparer qui nous permettra deux choses : 
   // 1/ comptabiliser les clicks pour comparer les images tous les deux clicks
   // 2/ stocker l'id de la case clickée afin d'y afficher l'image du même id
   compareArray: [],
   // fonction d'initialisation du jeu
   init: function () {
  
      // Remplissage du tableau d'images "imagesName"
      for(let i=1; i < 15; i++){
         game.imagesName.push(i);
         game.imagesName.push(i);
      }

      // pour chaque image du tableau en commençant par la dernière, on crée une position alétoire randomPosition
      for(var position = game.imagesName.length-1; position>=0 ; position--){
   
         // randomPosition reçoit un nombre entier aléatoire entre 0 et position
         var randomPosition = Math.floor(Math.random()*(position+1));

         // L'image inverse sa position avec la celle qui se trouve à la randomPosition
         var initialPosition=game.imagesName[position];
         game.imagesName[position]=game.imagesName[randomPosition];
         game.imagesName[randomPosition]=initialPosition;
      }

      // Notre tableau "imagesName" est désormais de la forme [1=>12, 2=>18, 3=>1, 4=>5, 5=>28 ...]
      // Pour la suite du jeu, nous considérons que l'image dont l'id est 1 appartient à la case dont l'id est 1, que l'image dont l'id est 5 appartient à la case dont l'id est 5.....
      // On pourrait faire monter toute les images dans le plateau de jeu (DOM), et les mettre en display none pour ne les afficher qu'au click, cependant, pour éviter qu'un petit malin aille les découvrir dans l'inspecteur du navigateur,
      // nous ne les monterons sur le plateau que lorsqu'une case sera cliquée.
      // Si les deux images sont égales nous les ferons rester, sinon, nous les supprimerons du plateau (mais elle resteront toujours affectées à leur case respective.)

      
   },

   handleClickShowImage: function(ev){// on récupère l'évènement au travers du paramètre ev
      let idClicked = ev.target.id;// à partir de l'évènement on récupère l'id de la case cliquée
      let target = document.getElementById(idClicked) // On récupère dans target l'élément cliqué ex: <div id="0" class="cell" afin d'accèder plus bas à son élément enfant "img"
      if(game.compareArray.length < 2){
      // si le tableau a moins de deux éléments, on fait monter l'image dans le DOM
          var img = document.createElement('img');
          img.src ='img/' + game.imagesName[idClicked] + '.png'
          target.appendChild(img);
          //et l'on stocke l'id de la case donc de l'image
          game.compareArray.push(idClicked);
      }
      //dès que notre tableau contient deux éléments (donc deux images cliquées), on appelle la fonction de comparaison avec, en paramètre, l'id des cases cliquées, donc l'id des deux images 
     if(game.compareArray.length == 2){
         game.compareImage(game.compareArray[0], game.compareArray[1]);
      }
   },

   compareImage: function(id1, id2){
      //on récupère les div correspondant aux deux cases cliquées
      let target1 = document.getElementById(id1)
      let target2 = document.getElementById(id2)
  
      // on compare le src du premier enfant de la div, donc de l'image qui à été montée, si elles sont différentes
      if (target1.firstChild.src != target2.firstChild.src){
          // on la garde affichée une seconde afin de pouvoir la mémoriser, avant de la faire disparaître du DOM, et l'on vide le tableau de comparaison pour le coup suivant
          setTimeout(function(){
              target1.removeChild(target1.firstChild);
              target2.removeChild(target2.firstChild);
          game.compareArray = [];
          }, 800);
      }else{
          //sinon, les deux images sont identiques, donc on les liasse affichée, et l'on vide le tableau de comparaison
         game.compareArray = [];
         game.checkEnd(); // On regarde si le jeu est gagnant
      }
   },

   checkEnd: function(){
      if (game.imgElements.length == 28 ){
         let name = prompt("Bravooooo !!! Vous avez gagné avec un temps de " + timing.count + " secondes !!! \n  Saisissez votre nom (12 caractères maxi): ");
         if(name == ""){name = "anonyme"};
         const re = new RegExp(/[^A-Za-z]/, "g");
         name = name.replaceAll(re , '');
         console.log(name)
         if(name.length > 12){name = name.slice(0,12)};
        
         console.log(name);
         window.location.href = "/datas/" + timing.count + "/" + name;// On transmets compteur au fichier datas.php qui va l'enregistrer en bdd
         game.resetAll();
      }
   },

   resetAll: function() {
      clearInterval(timing.barUp)
      clearInterval(timing.countUp);
      for(let cell of game.cells){
         cell.removeEventListener("click", game.handleClickShowImage);
      }
      timing.count = 0;
      timing.barWidth = 0;
      timing.barElement.style.width = 0 + "%";
      game.compareArray = [];
      game.imagesName = [];
      // suppression des images du DOM d'un éventuel précédent jeu
      while(game.imgElements.length > 0){
         game.imgElements[0].remove();
         }
      // On relance la fonction d'initialisation pour préparer le prochain jeu
      game.init();
      timing.init();
   },
}