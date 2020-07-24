document.addEventListener('DOMContentLoaded', () => {
	// reset button
	const btnClick = document.querySelector('#reset');
	btnClick.addEventListener('click', function() {
		location.reload();
	});
	// card options
	const cardArray = [
		{
			name: 'deadpool',
			img: 'img/deadpool.png'
		},
		{
			name: 'deadpool',
			img: 'img/deadpool.png'
		},
		{
			name: 'goku',
			img: 'img/goku.png'
		},
		{
			name: 'goku',
			img: 'img/goku.png'
		},
		{
			name: 'homer',
			img: 'img/homer.png'
		},
		{
			name: 'homer',
			img: 'img/homer.png'
		},
		{
			name: 'minecraft',
			img: 'img/minecraft.png'
		},
		{
			name: 'minecraft',
			img: 'img/minecraft.png'
		},
		{
			name: 'minion',
			img: 'img/minion.png'
		},
		{
			name: 'minion',
			img: 'img/minion.png'
		},
		{
			name: 'shroom',
			img: 'img/shroom.png'
		},
		{
			name: 'shroom',
			img: 'img/shroom.png'
		}
	];

	cardArray.sort(() => 0.5 - Math.random());

	const grid = document.querySelector('.grid');
	const resultDisplay = document.querySelector('#result');
	let cardsChosen = [];
	let cardsChosenId = [];
	let cardsWon = [];

	// create your board
	function createBoard() {
		for (let i = 0; i < cardArray.length; i++) {
			const card = document.createElement('img');
			card.setAttribute('src', 'img/blank.png');
			card.setAttribute('data-id', i);
			card.addEventListener('click', flipCard);
			grid.appendChild(card);
		}
	}

	//  check for matches
	function checkForMatch() {
		const cards = document.querySelectorAll('img');
		const optionOneId = cardsChosenId[0];
		const optionTwoId = cardsChosenId[1];
		if (cardsChosen[0] === cardsChosen[1]) {
			alert('MATCH!');
			cards[optionOneId].setAttribute('src', 'img/white.png');
			cards[optionTwoId].setAttribute('src', 'img/white.png');
			cardsWon.push(cardsChosen);
		} else {
			cards[optionOneId].setAttribute('src', 'img/blank.png');
			cards[optionTwoId].setAttribute('src', 'img/blank.png');
			alert('WRONG!');
		}
		cardsChosen = [];
		cardsChosenId = [];
		resultDisplay.textContent = cardsWon.length;
		if (cardsWon.length === cardArray.length / 2) {
			resultDisplay.textContent = 'YOU WIN!';
		}
	}
	// flip your card
	function flipCard() {
		const cardId = this.getAttribute('data-id');
		cardsChosen.push(cardArray[cardId].name);
		cardsChosenId.push(cardId);
		this.setAttribute('src', cardArray[cardId].img);
		if (cardsChosen.length === 2) {
			setTimeout(checkForMatch, 500);
		}
	}
	createBoard();
	// --------------------------------------
});
