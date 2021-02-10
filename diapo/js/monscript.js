window.addEventListener('load', commencer);

var mesImages; // tableau de mes 4 images 
var imageActuelle=0; // image affichée
var etat=0; //état de notre diaporama. 0= pas démarré, 1= démarré.
var diapo;
var secondes; 
secondes=prompt("Choisir le nombre de secondes pour le diaporama")*1000;


function commencer() {

	mesImages=document.getElementById('MesPetitsChatons').getElementsByTagName('img');
	
	for(i=0; i<mesImages.length; i++) {
	
		mesImages[i].addEventListener('click', function() {
			imageActuelle=this.getAttribute('alt').replace('Petit chaton ','');
			imageActuelle--;
			goToImage();
		;})
	}
	
	document.getElementById('next').addEventListener('click', goToNext);
	document.getElementById('previous').addEventListener('click', goToPrevious);
	document.getElementById('playPause').addEventListener('click', playPause);
	document.addEventListener('keydown', function(a){
		if(a.keyCode == 37){
			goToPrevious();
			}
		else if(a.keyCode == 39){
			goToNext();
			}
		else if(a.keyCode == 32){
			playPause ();
			}
		});
}


function goToNext() {
	if(imageActuelle==mesImages.length-1) imageActuelle=0; 
	else imageActuelle++;
	goToImage();
}

function goToPrevious() {
	if(imageActuelle==0) {
	imageActuelle=mesImages.length-1}
	else imageActuelle--;
	goToImage();
}


function goToImage() {
	document.getElementById('grandChaton').src=mesImages[imageActuelle].src.replace('_petit-nb.jpg', '_grand.jpg'); 

}


function playPause() {
	if(etat==0) {

		document.getElementById('playPause').src=document.getElementById('playPause').src.replace('play.png', 'pause.png');
		etat=1;
		diapo=setInterval(goToNext, secondes);
	
	}
	
	else {
		document.getElementById('playPause').src=document.getElementById('playPause').src.replace('pause.png', 'play.png');
		etat=0;
		clearInterval(diapo);
	}
	
	
	
}