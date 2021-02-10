window.addEventListener('load', commencer);
var saisie, choix; 
var etat=0

function commencer() {
	choix = document.getElementById('choix');
	choix.addEventListener('click', choisir);
	document.getElementById('convertir').addEventListener('click', convertir)
}

// choisir la conversion 

function choisir() {
	if (etat==0) {
	document.getElementById('choix').innerHTML='F ➔ €';
	document.getElementById('saisie').placeholder=document.getElementById('saisie').placeholder.replace("vos euros", "vos francs");
	etat=1;
	}
	
	else {
	document.getElementById('choix').innerHTML='€ ➔ F';
	document.getElementById('saisie').placeholder=document.getElementById('saisie').placeholder.replace("vos francs", "vos euros");
	etat=0;
	}
}

// convertir la valeur donnée

function convertir() {
	document.getElementById('saisie').value=document.getElementById('saisie').value.replace(',', '.');
	saisie=document.getElementById('saisie').value;
	
	if(etat	) {
	document.getElementById('valeur1').innerHTML=saisie+' FRANCS';
	document.getElementById('valeur2').innerHTML=saisie/6.56+' EUROS';
		
	}
	else {
	document.getElementById('valeur1').innerHTML=saisie+' EUROS';
	document.getElementById('valeur2').innerHTML=saisie*6.56+' FRANCS';
	}
}

