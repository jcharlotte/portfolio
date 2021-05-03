var c = document.getElementById('canvasMorpion');

var ctx = c.getContext("2d");

// ---------------------------------------------------------------
// Mise en place des variables
var largeur = c.width;
var hauteur = c.height;

var nbColonnes = 3 ;
var nbLignes = 3 ;

var hauteurLigne = hauteur/nbLignes;
var largeurColonne = largeur/nbColonnes;

// Croix
var ratioCroix = 0.7 ;
var epaisseurCroix = 3 ;
var couleurCroix ="#A0D4C2";

// Cercle
var ratioRond = 0.7 ;
var epaisseurRond = 3 ;
var couleurRond = "#a94064";
var rayonRond = largeurColonne ;
    if(largeurColonne > hauteurLigne){

	rayonRond = hauteurLigne ;
    }
    rayonRond /= 2;
    rayonRond *= ratioRond ;

var nbCoupsVictoire = 3;



var jeu = true;
var joueurActuel = true;
var coups = [];

for(var i = 0 ; i < nbLignes ; i++)
{
	for(var j = 0 ; j < nbColonnes ; j++) 
	{		
		coups.push([]);	
		coups[i].push(false);
	}
}


// ---------------------------------------------------------------
// Création des cases
ctx.fillStyle = "white" ;
ctx.strokeStyle = "black" ;
ctx.fillRect(0, 0, largeur, hauteur);
ctx.strokeRect(0, 0, largeur, hauteur);

// Création de la grille
ctx.beginPath()
ctx.lineWidth = 1;
ctx.strokeStyle = "black";

for( var i = 0 ; i < nbLignes-1; i++){

    // Lignes
    ctx.moveTo( 0, (i+1) * (hauteurLigne) );
    ctx.lineTo( largeur, (i+1) * (hauteurLigne) );
    ctx.stroke();
}

for( var j = 0 ; j < nbColonnes-1; j++){

    // Colonnes
    ctx.moveTo( (j+1) * (largeurColonne), 0);
    ctx.lineTo( (j+1) * (largeurColonne), hauteur );
    ctx.stroke();
}

ctx.closePath();


// ---------------------------------------------------------------
// Paramètrage

c.addEventListener("click", play, false);

function createCroix(x,y){

    // x,y -> centre de la croix
    ctx.beginPath();
	ctx.lineWidth = epaisseurCroix;
	ctx.strokeStyle  = couleurCroix;
	ctx.moveTo(x - (largeurColonne/2)*ratioCroix, y - (hauteurLigne/2)*ratioCroix );
	ctx.lineTo(x + (largeurColonne/2)*ratioCroix, y + (hauteurLigne/2)*ratioCroix );

	ctx.moveTo(x + (largeurColonne/2)*ratioCroix, y - (hauteurLigne/2)*ratioCroix );
	ctx.lineTo(x - (largeurColonne/2)*ratioCroix, y + (hauteurLigne/2)*ratioCroix );

	ctx.stroke();
	ctx.closePath();
}

function createRond(x,y){

    // x, y -> centre du rond
    ctx.beginPath();
	ctx.lineWidth = epaisseurRond ;
	ctx.strokeStyle = couleurRond ;
	ctx.arc(x,y,rayonRond,0,2*Math.PI);
	ctx.stroke();
}

function play(event){

    x = event.clientX - c.offsetLeft ;
    y = event.clientY - c.offsetTop ;

    var caseX = parseInt(x/(largeur/nbColonnes));
    var caseY = parseInt(y/(hauteur/nbLignes));

    var milieuX = caseX*largeurColonne + largeurColonne/2 ;
    var milieuY = caseY*hauteurLigne + hauteurLigne/2 ;

    if(jeu === true ){

        if(!coups[caseY][caseX]){

            if(joueurActuel === true){

                createCroix(milieuX,milieuY);
                coups[caseY][caseX] = "croix" ; 
                document.getElementById("joueur").innerHTML = "Au joueur de placer un rond";
            }else{

                createRond(milieuX,milieuY);
                coups[caseY][caseX] = "rond" ; 
                document.getElementById("joueur").innerHTML = "Au joueur de placer une croix";
            }

            joueurActuel = !joueurActuel;
        }
    }
}

function gain(symbole, x, y){

    

}