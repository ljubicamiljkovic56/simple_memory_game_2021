document.addEventListener('DOMContentLoaded', () => {

    //card options - array of cards - pictures from images folder
    const cardArray = [
        {name:'bear', img:'images/bear.png'},
        {name:'bear', img:'images/bear.png'},
        {name:'bunny', img:'images/bunny.png'},
        {name:'bunny', img:'images/bunny.png'},
        {name:'cake', img:'images/cake.png'},
        {name:'cake', img:'images/cake.png'},
        {name:'letter', img:'images/letter.png'},
        {name:'letter', img:'images/letter.png'},
        {name:'monkey', img:'images/monkey.png'},
        {name:'monkey', img:'images/monkey.png'},
        {name:'star', img:'images/star.png'},
        {name:'star', img:'images/star.png'}
    ]

    //random card
    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    //create a board
    function createBoard() {
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'images/hearts.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if(cardsChosen[0] === cardsChosen[1]){
            alert('You found a match!');
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'images/hearts.png');
            cards[optionTwoId].setAttribute('src', 'images/hearts.png');
            alert('Sorry, try again');
        }

        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!';
        }
    }

    //flip the card
    function flipCard(){
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard()

})