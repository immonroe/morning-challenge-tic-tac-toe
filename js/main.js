// Player starts game by entering name and initializing game

// Once games

// Players click on a grid of 3 x 3 tiles to place their icon

// After they place icon, it is the other player's turn to place an icon

// Once there are 3 X or O in a row (vertically, horizontally, diagonally), the game ends and that player is the winner

// When player meets win condition, the DOM will show "Playerx wins!"

// Once the game is over, the board will no longer be able to add symbols to the board

// There will be a start button to reset the board and start game from the beginning

class Player {
    constructor(name, symbol) {
        this.name = name
        this.symbol = symbol
    }
}

const playerOne = 'Manny' // prompt('Enter your name') 
const playerTwo = 'CPU' // prompt('Enter your name') 

let one = new Player(playerOne, 'X')
let two = new Player(playerTwo, 'O')

let playerTurn = false

const listOne = document.querySelector('.one')
const listTwo = document.querySelector('.two')
const listThree = document.querySelector('.three')
const listFour = document.querySelector('.four')
const listFive = document.querySelector('.five')
const listSix = document.querySelector('.six')
const listSeven = document.querySelector('.seven')
const listEight = document.querySelector('.eight')
const listNine = document.querySelector('.nine')

let grid = [
    [listOne, listTwo, listThree], 
    [listFour, listFive, listSix],
    [listSeven, listEight, listNine]
]

function playGame() {

    
    listOne.addEventListener('click', () => {
        console.log('You clicked on one!')
        
        if (playerTurn == false) {
            document.querySelector('.one').innerHTML = one.symbol
            console.log(grid[0][0].innerHTML)
        } else {
            document.querySelector('.one').innerHTML = two.symbol
            console.log(grid[0][0].innerHTML)
        }
        playerTurn = !playerTurn
    })

    listTwo.addEventListener('click', () => {
        console.log('You clicked on two!')
        if (playerTurn === false) {
            document.querySelector('.two').innerHTML = one.symbol
        } else {
            document.querySelector('.two').innerHTML = two.symbol
        }
        playerTurn = !playerTurn
    })

    
    listThree.addEventListener('click', () => {
        console.log('You clicked on three!')
        if (playerTurn === false) {
            document.querySelector('.three').innerHTML = one.symbol
        } else {
            document.querySelector('.three').innerHTML = two.symbol
        }
        playerTurn = !playerTurn
    })

    
    listFour.addEventListener('click', () => {
        console.log('You clicked on four!')
        if (playerTurn === false) {
            document.querySelector('.four').innerHTML = one.symbol
        } else {
            document.querySelector('.four').innerHTML = two.symbol
        }
        playerTurn = !playerTurn
    })

    
    listFive.addEventListener('click', () => {
        console.log('You clicked on five!')
        if (playerTurn === false) {
            document.querySelector('.five').innerHTML = one.symbol
        } else {
            document.querySelector('.five').innerHTML = two.symbol
        }
        playerTurn = !playerTurn
    })

    
    listSix.addEventListener('click', () => {
        console.log('You clicked on six!')
        if (playerTurn === false) {
            document.querySelector('.six').innerHTML = one.symbol
        } else {
            document.querySelector('.six').innerHTML = two.symbol
        }
        playerTurn = !playerTurn
    })

    
    listSeven.addEventListener('click', () => {
        console.log('You clicked on seven!')
        if (playerTurn === false) {
            document.querySelector('.seven').innerHTML = one.symbol
        } else {
            document.querySelector('.seven').innerHTML = two.symbol
        }
        playerTurn = !playerTurn
    })

    
    listEight.addEventListener('click', () => {
        console.log('You clicked on eight!')
        if (playerTurn === false) {
            document.querySelector('.eight').innerHTML = one.symbol
        } else {
            document.querySelector('.eight').innerHTML = two.symbol
        }
        playerTurn = !playerTurn
    })

    
    listNine.addEventListener('click', () => {
        console.log('You clicked on nine!')
        if (playerTurn === false) {
            document.querySelector('.nine').innerHTML = one.symbol
        } else {
            document.querySelector('.nine').innerHTML = two.symbol
        }
        playerTurn = !playerTurn
    })
}

playGame()