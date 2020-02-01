let blueDeck = document.querySelector(".blue-deck");
let brownDeck = document.querySelector(".brown-deck");
let pinkDeck = document.querySelector(".pink-deck");

if (blueDeck && brownDeck && pinkDeck) {
blueDeck.addEventListener('click', function(event){
		blueDeck.classList.add("selected");
		brownDeck.classList.remove("selected");
		pinkDeck.classList.remove("selected");
})

brownDeck.addEventListener('click', function(event){
		brownDeck.classList.add("selected");
		blueDeck.classList.remove("selected");
		pinkDeck.classList.remove("selected");
})

pinkDeck.addEventListener('click', function(event){
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
})

}
