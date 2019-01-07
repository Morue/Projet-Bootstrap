	//ANIMATION ANCRAGE
	
	$(document).ready(function() {
		$('.js-scrollTo').on('click', function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 750; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});
	});

// CALCUL RESERVATION
let somme = 0
function sommeNombre() {
	var place = document.querySelector("#places").value;
	
	var tarif =document.querySelector("#tarif").value;
	var pu = 0;
	switch(tarif){
		case "Normal":
		pu=10 ;
		break;
		case "Etudiant" :
		pu=8;
		break;
		case "Senior" :
		pu=9;
		break;
		case "Enfant" :
		pu=5;
		break;	
	}
	var total = pu*place;
	//console.log(total);

	//CALCUL TOTAL
	var displayTotal = document.querySelector("#cart_total");
	
	//CUMUL COMMANDE
	somme += total;
	displayTotal.textContent= somme + "€";
  }

//AJOUT AU PANIER
function ajoutPanier(){
	var nom = document.querySelector("#nom").value;
	var email = document.querySelector("#email").value;
	var titre = document.querySelector("#titre").value;
	var horaire = document.querySelector("#horaire").value;

	var displayNom = document.querySelector("#commandeNom");
	displayNom.textContent = nom;
	var displayEmail = document.querySelector("#commandeEmail");
	displayEmail.textContent = email;
	var displayTitre = document.querySelector("#commandeTitre");
	displayTitre.textContent =titre;
	var displayHoraire = document.querySelector("#commandeHoraire");
	displayHoraire.textContent = horaire;
	var displayPrix = document.querySelector("#commandePrix");
	displayPrix.textContent = somme + "€";
}

// SAUVEGARDE PANIER
function saveCart() {
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  }

 // CHARGER LE PANIER
function loadCart() {
	cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
}
	if (sessionStorage.getItem("shoppingCart") != null) {
	loadCart();
	}

  // CREATION D'UN BOUTON CLOSE POUR CHAQUE COMMANDE
  var myNodelist = document.querySelectorAll(".ligneCommande");
  var i;
  for (i = 0; i < myNodelist.length; i++) {
	var td = document.createElement("td");
	var txt = document.createTextNode("\u00D7");
	td.className = "close";
	td.onclick = function() {
		var div = this.parentElement;
		div.style.display = "none";
	  }
	td.appendChild(txt);
	myNodelist[i].appendChild(td);
  }

  // CLIQUE SUR LE BOUTON CLOSE POUR SUPPRIMER LA COMMANDE
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// COMPTAGE D'ITEM DANS LE PANIER
obj.totalCount = function() {
    var totalCount = 0;
    for(var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  }

  // TOTAL DU PANIER
  obj.totalCart = function() {
    var totalCart = 0;
    for(var item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart.toFixed(2));
  }







