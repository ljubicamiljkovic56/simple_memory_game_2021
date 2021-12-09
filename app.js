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

    const grid = document.querySelector('.grid');

    //create a board
    function createBoard() {
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'images/hearts.png');
            card.setAttribute('data-id', i);
            //card.addEventListener('click', flipcard);
            grid.appendChild(card);
        }
    }

    createBoard()

})