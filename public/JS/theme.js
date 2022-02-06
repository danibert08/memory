const theme = {
   changeElement: document.getElementById('themeChange'),// On récupère le select du thème pour lui affecter un écouteur d'évènement au changement
   bodyElement: document.getElementById('body'),// récupération de l'élément "body"

   init: function(){
      theme.changeElement.addEventListener("change", theme.changeTheme);
   },

   changeTheme: function(ev){
      theme.bodyElement.removeAttribute('class'); // suppression de l'attribut "class", donc du thème précédent
      theme.bodyElement.classList.add(ev.target.value); // Ajout de l'attribut "class" avec en valeur celle du thème sélectionné
   }
}
// La nouvelle valeur de l'attribut "class" renvoie au CSS pour modifier les couleurs du jeu