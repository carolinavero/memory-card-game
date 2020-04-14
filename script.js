document.addEventListener("DOMContentLoaded", () => {

    //card options
    const cardArray = [
        {
            name: 'burger',
            img: 'img/burger.png'
        },
        {
            name: 'donuts',
            img: 'img/donuts.png'
        },
        {
            name: 'fries',
            img: 'img/fries.png'
        },
        {
            name: 'hotdog',
            img: 'img/hotdog.png'
        },
        {
            name: 'icecream',
            img: 'img/icecream.png'
        },
        {
            name: 'onionrings',
            img: 'img/onionrings.png'
        },
        {
            name: 'pizza',
            img: 'img/pizza.png'
        },
        {
            name: 'popcorn',
            img: 'img/popcorn.png'
        },
        {
            name: 'burger',
            img: 'img/burger.png'
        },
        {
            name: 'donuts',
            img: 'img/donuts.png'
        },
        {
            name: 'fries',
            img: 'img/fries.png'
        },
        {
            name: 'hotdog',
            img: 'img/hotdog.png'
        },
        {
            name: 'icecream',
            img: 'img/icecream.png'
        },
        {
            name: 'onionrings',
            img: 'img/onionrings.png'
        },
        {
            name: 'pizza',
            img: 'img/pizza.png'
        },
        {
            name: 'popcorn',
            img: 'img/popcorn.png'
        },
    ]
    
    cardArray.sort(() => 0.5 - Math.random()) 

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    const replayGame = document.querySelector('#replay')

    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    // create the board 
    function createBoard() {
        for (let i  = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'img/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard) 
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch () {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (cardsChosen[0] === cardsChosen[1] && cardsChosenId[0] != cardsChosenId[1]) {
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'img/blank.png')
            cards[optionTwoId].setAttribute('src', 'img/blank.png')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length

        if(cardsWon.length === cardArray.length/2) {
            replayGame.style.display = 'block'
        }
    }
    //flip card 
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)

        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 400)
        }
    }

    createBoard()



})