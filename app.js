// Générer le plateau de jeu

let grid = [
      ['', 'b', 'b', 'b', '',''],
      ['', '', '', '', '', '',''],
      ['', '', '', '', '', '',''],
      ['', '', '', '', '', '',''],
      ['', '', '', '', '', '',''],
      ['', '', '', '', '', '',''],
 ];
 

const gridHeaders = {
    rows : [1,2,3,4,5,6],
    columns : ['A','B','C','D','E','F']
};

function displayLine(line){
    let lineToDisplay = " ";
    for (let columnIndex= 0; columnIndex < line.length; columnIndex++){
            let currentChar = line[columnIndex];
            if(line[columnIndex] === ""){
                lineToDisplay += '~';
            }else{
                lineToDisplay += currentChar;
                
            }
           lineToDisplay += " ";     
    }
    return (lineToDisplay);
};

function displayGrid(){
    console.log('  ' + gridHeaders.columns.join(' '));
        for(let rowIndex=0; rowIndex<grid.length; rowIndex++){
        
       let row  =  gridHeaders.rows[rowIndex];
       row += ' ' + displayLine(grid[rowIndex]);
       console.log(row);
    }
};
displayGrid();
// Générer la position aléatoire des images
let cell = document.getElementById('cell13')
let img = document.createElement('img');
img.src="./img/4.png"
cell.appendChild(img);
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
