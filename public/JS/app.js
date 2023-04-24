const app = {
   init: function () {
     //initialisation du jeu
     game.init();
 
     //Initialisation du chrono
     timing.init();

     //Initialisation du thème
     theme.init();

   },
 };
 
 document.addEventListener("DOMContentLoaded", app.init);
 