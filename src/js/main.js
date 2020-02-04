let nextBtn = document.querySelector(".btn");


let blueDeck = document.querySelector(".blue-deck");
let brownDeck = document.querySelector(".brown-deck");
let pinkDeck = document.querySelector(".pink-deck");



if (blueDeck && brownDeck && pinkDeck) {
	
	blueDeck.addEventListener('click', function(event){
		nextBtn.href = "wheels.html?deck=blue";
			blueDeck.classList.add("selected");
			brownDeck.classList.remove("selected");
			pinkDeck.classList.remove("selected");
	})

	brownDeck.addEventListener('click', function(event){
		nextBtn.href = "wheels.html?deck=brown";
			brownDeck.classList.add("selected");
			blueDeck.classList.remove("selected");
			pinkDeck.classList.remove("selected");
			var deck = getParameterByName('deck');
			if (deck === "brown") {
		deckImage.src = "dist/img/blue-deck-purp-wheels.png";

	}

	})

	pinkDeck.addEventListener('click', function(event){
		nextBtn.href = "wheels.html?deck=pink";
			pinkDeck.classList.add("selected");
			blueDeck.classList.remove("selected");
			brownDeck.classList.remove("selected");
	})

}


let purpleWheel = document.querySelector(".purple-wheel");
let pinkWheel = document.querySelector(".pink-wheel");
let brownWheel = document.querySelector(".brown-wheel");



//wheels page
if (purpleWheel && pinkWheel && brownWheel) {
	var deck = getParameterByName('deck');
	console.log(deck);
	
	let deckImage  = document.querySelector("#deck-for-wheels");
	console.log(deckImage);

	if (deck === "brown") {
		deckImage.src = "dist/img/brown-deck-wheels.png";
	}else if (deck === "blue"){
		deckImage.src = "dist/img/blue-deck-brown-wheels.png";
	}else if (deck === "pink"){
		deckImage.src = "dist/img/pink-deck-brown-wheels.png";
}
	
	purpleWheel.addEventListener('click', function(event){
		purpleWheel.href = "wheels.html?deck=blue";
		purpleWheel.classList.add("selected");
		pinkWheel.classList.remove("selected");
		brownWheel.classList.remove("selected");

		if  (deck == "blue"){
			deckImage.src = "dist/img/blue-deck-purp-wheels.png";
		}else if (deck =="brown"){
			deckImage.src = "dist/img/brown-deck-purp-wheels.png";
		}else if (deck = "pink"){

			deckImage.src = "dist/img/pink-deck-purp-wheels.png";
		}
		

	})


	pinkWheel.addEventListener('click', function(event){
		pinkWheel.classList.add("selected");
		purpleWheel.classList.remove("selected");
		brownWheel.classList.remove("selected");
	
		if  (deck == "blue"){
			deckImage.src = "dist/img/blue-deck-pink-wheels.png";
		}else if (deck =="brown"){
			deckImage.src = "dist/img/brown-deck-pink-wheels.png";
		}else if (deck = "pink"){
			deckImage.src = "dist/img/pink-deck-pink-wheels.png";
		}
		


	})

	brownWheel.addEventListener('click', function(event){
		brownWheel.classList.add("selected");
		pinkWheel.classList.remove("selected");
		purpleWheel.classList.remove("selected");

		if  (deck == "blue"){
			deckImage.src = "dist/img/blue-deck-brown-wheels.png";
		}else if (deck =="brown"){
			deckImage.src = "dist/img/brown-deck-brown-wheels.png";
		}else if (deck = "pink"){
			deckImage.src = "dist/img/pink-deck-brown-wheels.png";
		}
			
	})

}//wheels page

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}



// if ("brown") {
//   document.querySelector('wrapper-wheels').deckImage.src
// }



// var images = document.querySelector("img");
// for(var i = 0; i < images.length; i++) {
//     var image = images[i];
//     image.onclick = function(event) {
//          window.location.href = this.brownDeck + 'wheels.html';
//     };
// }
