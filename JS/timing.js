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

   timer: function(){
         timing.countUp = setInterval(timing.displayCount, 1000); //On lance le compteur de temps en seconde
         timing.barUp = setInterval(timing.displayProgressBar, 1000); // on lance la progress bar
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
      timing.count = 0;
      timing.barWidth = 0;
      timing.barElement.style.width = 0 + "%";
      
      // On relance la fonction d'initialisation pour préparer le prochain jeu
      game.init();
   },
}