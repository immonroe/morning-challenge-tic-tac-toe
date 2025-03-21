// Player starts game by entering name and initializing game

// Once games

// Players click on a grid of 3 x 3 tiles to place their icon

// After they place icon, it is the other player's turn

// Once there are 3 X or O in a row (vertically, horizontally, diagonally), the game ends and that player is the winner

// When player meets win condition, the DOM will show "Playerx wins!"

// Once the game is over, the board will no longer be able to add symbols to the board

// There will be a start button to reset the board and start game from the beginning

const listOne = document.querySelector('.one')
listOne.addEventListener('click', () => {
    console.log('You clicked on one!')
})

const listTwo = document.querySelector('.two')
listTwo.addEventListener('click', () => {
    console.log('You clicked on two!')
})

const listThree = document.querySelector('.three')
listThree.addEventListener('click', () => {
    console.log('You clicked on three!')
})

const listFour = document.querySelector('.four')
listFour.addEventListener('click', () => {
    console.log('You clicked on four!')
})

const listFive = document.querySelector('.five')
listFive.addEventListener('click', () => {
    console.log('You clicked on five!')
})

const listSix = document.querySelector('.six')
listSix.addEventListener('click', () => {
    console.log('You clicked on six!')
})

const listSeven = document.querySelector('.seven')
listSeven.addEventListener('click', () => {
    console.log('You clicked on seven!')
})

const listEight = document.querySelector('.eight')
listEight.addEventListener('click', () => {
    console.log('You clicked on eight!')
})

const listNine = document.querySelector('.nine')
listNine.addEventListener('click', () => {
    console.log('You clicked on nine!')
})

class Player {
    constructor(name, symbol) {
        this.name = name
        this.symbol = symbol
    }
}

const playerOne = 'Manny' // prompt('Enter your name') 

let one = new Player(playerOne, 'X')
let two = new Player('cpu', 'O')