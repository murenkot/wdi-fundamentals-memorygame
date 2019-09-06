console.log("Up and running!");

const cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png',
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png',
},
{rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png',
},
{rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png',
}
];
const cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
			if (cardsInPlay[0] === cardsInPlay[1]) {
				console.log("You found a match!");
				alert("You found a match!");
			} else {
				console.log("Sorry, try again.");
				alert("Sorry, try again.");
			}
		}
};

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	console.log("!!!!!cardId: " + cardId)
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	checkForMatch();
};

function createBoard() {
	for (var i = 0; i<4; i++){
		var cardElement = document.createElement('img'); 
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();
