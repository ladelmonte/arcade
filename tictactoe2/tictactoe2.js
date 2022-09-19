const playerTurnElem = document.querySelector("#playerturn");

const x = 'x'
const circle = 'circle'
const winCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell')
const board = document.getElementById('board')
const winningMessageElem = document.getElementById('winningMessage')
const winningMessageTextElem = document.querySelector('[data-winning-message-text')
const restartButton = document.getElementById('restartbutton')
let circleTurn
cellElements.forEach(cell => {
    cell.addEventListener('click', whenClick, {once: true})
})


startGame()

restartButton.addEventListener('click', startGame)

function startGame(){ //////////////////////////////////////// start game
    circleTurn = false
    cellElements.forEach(cell => {
        cell.classList.remove(x)
        cell.classList.remove(circle)
        cell.removeEventListener('click', whenClick)
        cell.addEventListener('click', whenClick, { once: true })
    })
    setHover()
    winningMessageElem.classList.remove('show')
} ////////////////////////////////////////////////////////////////////



function whenClick(e) { /////////////////////////////////////////////////handle click
    const cell = e.target
    const currentClass = circleTurn ? circle : x
    placeMark(cell, currentClass)
    if (checkWin(currentClass)){
        end(false)

    } else if (tie()){
        end(true)
    } else{
        swapTurns()
        setHover()
    }
} /////////////////////////////////////////////////////

function end(draw) { /////////////////////////////////////////// end////////////// point of confusion

    if (draw) {
winningMessageTextElem.innerText = 'Tie!'
    } else {
        winningMessageTextElem.innerText = `${circleTurn ? 'player2' : 'player1'} is the Winner!` ///// cant figure out what to replace player 1 and 2 with to have player names show up; continued 109
    }
    winningMessageElem.classList.add('show')
}

function tie (){
    return [...cellElements].every(cell => {
        return cell.classList.contains(x) ||
        cell.classList.contains(circle)
    })
} /////////////////////////////////////////////////////////////


function placeMark(cell, currentClass) { ////////////////////////////////////placeMark
    cell.classList.add(currentClass)
}

function swapTurns() {
    circleTurn = !circleTurn
} //////////////////////////////////////////////


function setHover() { /////////////////////////////////////set hover
    board.classList.remove(x)
    board.classList.remove(circle)
    if (circleTurn) {
        board.classList.add(circle)
    } else {
        board.classList.add(x)
    }

} ////////////////////////////////////////////////////////////

function checkWin(currentClass) { ///////////////////////////////////checkWin
   return winCombo.some(combination => {
    return combination.every(index => {
        return cellElements[index].classList.contains(currentClass)
    })
   })
} ///////////////////////////////////////////////////////////////////



///////// point of confusion ////////////

let player1Elem = document.getElementsByName('player1')

let player2Elem = document.getElementsByName('player2')

  
        text = `
        <input name="player1" placeholder="Enter Player 1 Name" class>
        <input name="player2" placeholder="Enter Player 2 Name">
        <button type="button" onclick="getInputValue();">Submit</button>
        `;


      playerTurnElem.innerHTML = text;

function getInputValue(){
    var inputVal = document.getElementsByName('player1').value

}