// Player starts game by entering name and initializing game

// Once games

// Players click on a grid of 3 x 3 tiles to place their icon

// After they place icon, it is the other player's turn

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
const playerOne = prompt('Enter your name')

let one = new Player(playerOne, 'X')
let two = new Player(playerOne, 'O')