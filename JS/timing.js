// On créer un écouteur d'évènement 'click" sur le bouton de lancement de partie.
let button = document.getElementById('launch');
button.addEventListener('click',timer);

// On récupère les éléments permettant l'affichage du temps restant
let remainingElement = document.getElementById('remaining');
let minutesElement = document.getElementById("minutes")
let secondsElement = document.getElementById("seconds")

// Fonction lançée suite à l'évènement "click"
function timer(){

   // On lance la fonction d'initialisation du jeu
   init();
  
   const beginningTime = new Date()  // On récupère l'instant précis du lancement du jeu
   const finalTime = Date.parse(beginningTime)  + 90000 // on définit l'instant de fin du jeu en timestamp
   const endTime = new Date(finalTime);   // on le convertit en date

   // on déclenche un chrono, ici 1mn 30s
   setTimeout(function(){
      alert("Perdu !! Désolé, le temps imparti est écoulé....");
         // On vide l'affichage du temps d'un éventuel jeu précédent
         minutesElement.textContent = "";
         secondsElement.textContent = "";
         clearInterval(timerDisplay);
      // Après le temps écoulé en totalité, on relance la fonction d'initialisation
      init();
   }, 90000 )
     
  
   // fonction d'affichage du temps de jeu restant
   function displayTime(){
     
      let remainingTime = endTime - new Date; // on définit le temps restant
      let seconds = Math.floor ((remainingTime / 1000)% 60); // le temps restant est convertit en seconde
      let minutes = Math.floor ((remainingTime / 1000/60)% 60);// et en minutes
      
      minutesElement.textContent = "Temps restant : " + minutes + "mn "; // puis on injecte le contenu dans le DOM
      secondsElement.textContent = seconds + "s";

}

let timerDisplay = setInterval(displayTime,1000) // On relance l'affichage du temps restant à chaque seconde
}
