// Générer le plateau de jeu

// let grid = [
//       ['', 'b', 'b', 'b', '',''],
//       ['', '', '', '', '', '',''],
//       ['', '', '', '', '', '',''],
//       ['', '', '', '', '', '',''],
//       ['', '', '', '', '', '',''],
//       ['', '', '', '', '', '',''],
//  ];
 

// const gridHeaders = {
//     rows : [1,2,3,4,5,6],
//     columns : ['A','B','C','D','E','F']
// };

// function displayLine(line){
//     let lineToDisplay = " ";
//     for (let columnIndex= 0; columnIndex < line.length; columnIndex++){
//             let currentChar = line[columnIndex];
//             if(line[columnIndex] === ""){
//                 lineToDisplay += '~';
//             }else{
//                 lineToDisplay += currentChar;
                
//             }
//            lineToDisplay += " ";     
//     }
//     return (lineToDisplay);
// };

// function displayGrid(){
//     console.log('  ' + gridHeaders.columns.join(' '));
//         for(let rowIndex=0; rowIndex<grid.length; rowIndex++){
        
//        let row  =  gridHeaders.rows[rowIndex];
//        row += ' ' + displayLine(grid[rowIndex]);
//        console.log(row);
//     }
// };
// displayGrid();
// Générer la position aléatoire des images
var imagesName=[];
for(let i=1; i < 19; i++){
    imagesName.push(i);
    imagesName.push(i);
}

for(var position=imagesName.length-1; position>=0 ; position--){
	
	//hasard reçoit un nombre entier aléatoire entre 0 et position
	var randomPosition=Math.floor(Math.random()*(position+1));
	//Echange
	var initialPosition=imagesName[position];
	imagesName[position]=imagesName[randomPosition];
	imagesName[randomPosition]=initialPosition;
    
}


let cells = document.getElementsByClassName('cell')
for(let cell of cells){
    cell.addEventListener("click", showImage);
}
for(let cell of cells){
    var img = document.createElement('img');
    //img.classList.add('visible');
    let idCell = cell.id
    img.src ='img/' + imagesName[idCell] + '.png'
    cell.appendChild(img);
    img.classList.add('masked');
}
    
let compareArray = []

    function showImage(ev){
        let target = document.getElementById(ev.target.id)
        if(compareArray.length == 0){
        target.firstChild.classList.remove('masked');
        compareArray.push(ev.target.id);
        
        }else{
            target.firstChild.classList.remove('masked');
            compareArray.push(ev.target.id);
            compareImage(compareArray[0], compareArray[1]);
            console.log(compareArray);
            compareArray = [];
        }
    }
    function compareImage(id1, id2){
    let target1 = document.getElementById(id1)
    let target2 = document.getElementById(id2)
    target1.firstChild.classList.remove('masked')
    target2.firstChild.classList.remove('masked')
    if (target1.firstChild.src != target2.firstChild.src){
        console.log(target1.firstChild.src.split('/').pop() , target2.firstChild.src.split('/').pop())
        setTimeout(function(){
        target1.firstChild.classList.add('masked')
        target2.firstChild.classList.add('masked')
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
