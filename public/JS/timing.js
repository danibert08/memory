const timing = {

   button: document.getElementById('launch'),
   count: 0,
   barElement: document.getElementById('bar'),
   barWidth: 0,
   countUp: undefined,
   barUp: undefined,
   
   init: function(){
     
      // On créer un écouteur d'évènement 'click" sur le bouton de lancement de partie.
         timing.button.addEventListener('click', timing.timer);
     
   },

   timer: function(){// On place un écouteur d'évènement "click" sur chaque case du jeu
         if(timing.barUp == undefined){  // s'il n'y a pas de partie en cours, on lance le chrono et la bar, sinon, si partie en cours
            // on bloque l'action du bouton "launch", pour ne pas accélerer les compteurs.
         timing.countUp = setInterval(timing.displayCount, 1000); //On lance le compteur de temps en seconde
         timing.barUp = setInterval(timing.displayProgressBar, 1000); // on lance la progress bar

         for(let cell of game.cells){
            cell.addEventListener("click", game.handleClickShowImage);
         }
      }
      
   },

   displayCount: function(){
      if(timing.count<100){
       timing.count ++
      }
   },

   displayProgressBar: function(){
      if(timing.barWidth<100){
          timing.barWidth ++;
          timing.barElement.style.width = timing.barWidth + "%";
      }else{
         alert('Désolé, vous avez perdu....!!');
         game.resetAll();
      }
   },
    
    
}