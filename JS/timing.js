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
      
         timing.countUp = setInterval(timing.displayCount, 1000); //On lance le compteur de temps en seconde
         timing.barUp = setInterval(timing.displayProgressBar, 1000); // on lance la progress bar
         
         for(let cell of game.cells){
            cell.addEventListener("click", game.handleClickShowImage);
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
         timing.resetTime();
      }
   },
    
    resetTime: function() {
      clearInterval(timing.barUp)
      clearInterval(timing.countUp);
      for(let cell of game.cells){
         cell.removeEventListener("click", game.handleClickShowImage);
      }
      timing.count = 0;
      timing.barWidth = 0;
      timing.barElement.style.width = 0 + "%";
      game.compareArray = [];
      // suppression des images du DOM d'un éventuel précédent jeu
      while(game.imgElements.length > 0){
         game.imgElements[0].remove();
         }
      // On relance la fonction d'initialisation pour préparer le prochain jeu
      game.init();
      timing.init();
   },
}