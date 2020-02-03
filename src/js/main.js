let nextBtn = document.querySelector(".btn");


let blueDeck = document.querySelector(".blue-deck");
let brownDeck = document.querySelector(".brown-deck");
let pinkDeck = document.querySelector(".pink-deck");
let deckImage = document.querySelector("src")
let brownDww = document.querySelector(".brown-deck-wheels")



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


if (purpleWheel && pinkWheel && brownWheel) {
	
purpleWheel.addEventListener('click', function(event){
		purpleWheel.classList.add("selected");
		pinkWheel.classList.remove("selected");
		brownWheel.classList.remove("selected");
		if (deck === "blue") {
	deckImage.src = "dist/img/blue-deck-purp-wheels.png";

}
})


pinkWheel.addEventListener('click', function(event){
		pinkWheel.classList.add("selected");
		purpleWheel.classList.remove("selected");
		brownWheel.classList.remove("selected");
})

brownWheel.addEventListener('click', function(event){
		brownWheel.classList.add("selected");
		pinkWheel.classList.remove("selected");
		purpleWheel.classList.remove("selected");
		if (deck === "brown") {
	deckImage.src = "dist/img/brown-deck-wheels.png";

}
})

}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var deck = getParameterByName('deck');

if ("brown") {
  document.querySelector('wrapper-wheels').innerHTML += '<img src="images/brown'+deck+'.png"/>';
}



// var images = document.querySelector("img");
// for(var i = 0; i < images.length; i++) {
//     var image = images[i];
//     image.onclick = function(event) {
//          window.location.href = this.brownDeck + 'wheels.html';
//     };
// }
