window.addEventListener('load', commencer);
var signe, chiffre1, chiffre2, saisie, chrono, counter, x;
var etat=0;
var note=0;

function commencer () {
	document.getElementById('bouton').addEventListener('click', jeu);
	window.addEventListener('keydown', function() {
	console.log(event.keyCode);
		if(event.keyCode==13) calculer();
		if(event.keyCode==32) jeu();
	})
	
}

//démarrer la série de calculs
function jeu (){
	start();
	document.getElementById('bouton').src=document.getElementById('bouton').src.replace('start.png', 'pause.png');
}

//lancer les chiffres
function start () {
	counter = 10;	
	document.getElementById('chiffre1').innerHTML=chiffre1=Math.floor(Math.random()*10);
	document.getElementById('chiffre2').innerHTML=chiffre2=Math.floor(Math.random()*10);
	signe=Math.floor(Math.random()*3);
	document.getElementById('signe').innerHTML=genererSigne();
	document.getElementById('ok').addEventListener('click', calculer);	
	chrono();
}

//lancer le chrono
function chrono() {
	if(counter>=0)
	{
	document.getElementById('secondes').innerHTML=counter;
	counter-- ;
	x=setTimeout(chrono, 1000);
	}
	else goToFaux();
}

//générer le signe du calcul aléatoirement
function genererSigne() {
	var retour; 
	switch(signe) {
		case 0 : retour="+";  break;
		case 1 : retour="-"; break;
		case 2 : retour="x"; break;
	}
	return retour;
}


//calculer et vérifier le calcul
function calculer() {
	saisie = document.getElementById('saisie').value;
	
	if (signe==0) goToAddition();
	
	else if (signe==1) goToSoustraction();
	
	else if (signe==2) goToMultiplication();
	
	
}

function goToAddition() {
	if (chiffre1+chiffre2==saisie) goToVrai();
	else goToFaux();
	
}

function goToSoustraction() {
	if (chiffre1-chiffre2==saisie) goToVrai();
	else goToFaux();
}

function goToMultiplication() {
	if (chiffre1*chiffre2==saisie) goToVrai();
	else goToFaux();
	
}


//accumuler les points, relancer un nouveau calcul et le chrono
function goToVrai() {
	note++;
	etat++;
	document.getElementById('note').innerHTML=note+'/10';
	resultat();
	clearTimeout(x);
	document.getElementById('saisie').value='';
	alert('Bravo, continue comme ça!');
	start();

}

function goToFaux() {
	etat++;
	document.getElementById('note').innerHTML=note+'/10';
	resultat();
	clearTimeout(x);
	document.getElementById('saisie').value='';
	alert('Perdu, concentres-toi!');
	start();
}

//arrêter le jeu lorsqu'il y a eu 10 calculs de fait
function resultat() {
	if(etat==10) {
	alert('PARTIE FINIE! Vous avez : '+note+'/10');
	window.location.reload();
	}
}

