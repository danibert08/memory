// Pour générer le plateau de jeu nous créons un tableau qui contiendra chaque image en double

var imagesName=[];
for(let i=1; i < 15; i++){
    imagesName.push(i);
    imagesName.push(i);
}

for(var position = imagesName.length-1; position>=0 ; position--){
	
    // pour chaque image du tableau en commençant par la dernière, on crée une position alétoire randomPosition
	// randomPosition reçoit un nombre entier aléatoire entre 0 et position
	var randomPosition = Math.floor(Math.random()*(position+1));

	// L'image inverse sa position avec la celle qui se trouve à la randomPosition
	var initialPosition=imagesName[position];
	imagesName[position]=imagesName[randomPosition];
	imagesName[randomPosition]=initialPosition;
}

// Notre tableau imagesName est désormais de la forme [1=>12, 2=>18, 3=>1, 4=>5, 5=>28 ...]
// Pour la suite du jeu, nous considérons que l'image dont l'id est 1 appartient à la case dont l'id est 1, que l'image dont l'id est 5 appartient à la case dont l'id est 5.....
// On pourrait faire monter toute les images dans le plateau de jeu, et les mettre en display none, cependant, pour éviter qu'un petit malin aille les découvrir dans l'inspecteur du navigateur,
// nous ne les monterons sur le plateau que lorsqu'une case sera cliquée.
// Si les deux images sont égales nous les ferons rester, sinon, nous les supprimerons du plateau (mais elle resteront toujours affectées à leur case respective.)

// On récupère les cases du plateau de jeu
let cells = document.getElementsByClassName('cell')

// On place un écouteur d'évènement "click" sur chaque case du jeu
for(let cell of cells){
    cell.addEventListener("click", showImage);
}


// for(let cell of cells){
//     var img = document.createElement('img');
//     let idCell = cell.id
//     img.src ='img/' + imagesName[idCell] + '.png'
//     cell.appendChild(img);
//     img.classList.add('masked');
// }

// On créé un tableau d'items à comparer vide qui nous permettra deux choses : 
// 1/ comptabiliser les clicks pour comparer les images tous les deux clicks
// 2/ stocker l'id de la case clickée afin d'y afficher l'image du même id
let compareArray = []

    function showImage(ev){ // on récupère l'évènement au travers du paramètre ev
        let idClicked = ev.target.id;// à partir de l'évènement on récupère l'id de la case cliquée
        let target = document.getElementById(idClicked) // On récupère dans target l'élément cliqué ex: <div id="0" class="cell" afin d'accèder plus bas à son élément enfant "img"

        // si le tableau est vide on est au premier click, 
        if(compareArray.length == 0){
            var img = document.createElement('img');
            img.src ='img/' + imagesName[idClicked] + '.png'
            target.appendChild(img);
            //target.firstChild.classList.remove('masked');
            compareArray.push(idClicked);
        }else{
            var img = document.createElement('img');
            img.src ='img/' + imagesName[idClicked] + '.png'
            target.appendChild(img);
            //target.firstChild.classList.remove('masked');
            compareArray.push(idClicked);
            compareImage(compareArray[0], compareArray[1]);
            console.log(compareArray);
            compareArray = [];
        }
    }
    function compareImage(id1, id2){
    let target1 = document.getElementById(id1)
    let target2 = document.getElementById(id2)
    //target1.firstChild.classList.remove('masked')
    //target2.firstChild.classList.remove('masked')
    if (target1.firstChild.src != target2.firstChild.src){
        console.log(target1.firstChild.src.split('/').pop() , target2.firstChild.src.split('/').pop())
        setTimeout(function(){
            target1.removeChild(target1.firstChild);
            target2.removeChild(target2.firstChild);
        //target1.firstChild.classList.add('masked')
        //target2.firstChild.classList.add('masked')
        }, 1500);
    }
}



// Masquer les images

// Générer l'affichage de l'image 1 au click 

// Générer l'affichage de l'image 2 au click

// Créer la fonction de comparaison des images

// Générer l'action si comparaison false

// générer l'action si comparaison true

// générer le chrono

// Générer l'affichage des 5 meilleurs temps

// Générer l'alert "Victoire"

// Générer l'alert "perdu fin du jeu"

// Créer la fonction rejouer
