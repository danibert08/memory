// On récupère le selct du thème et on lui affecte un écouteur d'évènement au changement
const themeChange = document.getElementById('themeChange');
themeChange.addEventListener("change", changeTheme);

// A chaque changement
function changeTheme(ev){

   let body = document.getElementById('body'); // récupération de l'élément "body"
   body.removeAttribute('class'); // suppression de l'attribut "class", donc du thème précédent
   body.classList.add(ev.target.value); // Ajout de l'attribut "class" avec en valeur celle du thème sélectionné
}

// La nouvelle valeur de l'attibut "class" renvoie au CSS pour modifier les couleurs du jeu