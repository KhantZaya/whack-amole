const score = document.querySelector('.score')
const timeLeftEl = document.querySelector('.time-left')
const mole = document.querySelector('.mole')
const squares = document.querySelectorAll('.square')

let result = 0
let moleSquareId
let timeLeft = 10
let timerId

function randomSquare () {
    squares.forEach((square) => {
        square.classList.remove('mole')
    })
    let randomPosition = squares[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')
    console.log(randomPosition)
    moleSquareId = randomPosition.id
}

squares.forEach((square) => {
    square.addEventListener('mousedown', () => {
        if (square.id === moleSquareId) {
            result++
            score.textContent = result
            moleSquareId = null
        }
    })
})

let countDownTimerId 

function moveMole () {
    timerId = setInterval(randomSquare, 300)
    countDownTimerId = setInterval(countDown, 1000)
}

function countDown () {
    timeLeft--
    timeLeftEl.textContent = timeLeft
    if (timeLeft === 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        // alert(`GAME OVER YOUR SOCRE IS ${result}`)
        showTryagainBoard()
    }
}
//moveMole()

function startGame () {}
// start page
const playBtn = document.querySelector('.play')
const startBoard = document.querySelector('.startBoard')
const playBoard = document.querySelector('.playBoard')
const tryagainBoard = document.querySelector('.tryagainBoard')
const finalScore = document.querySelector('.final-score')
const tryAgain = document.querySelector('.try-again')

playBtn.addEventListener('click', () => {
    startBoard.style.display = 'none'
    playBoard.style.display = 'block'
    moveMole()
})

tryAgain.addEventListener('click',() => {
    tryagainBoard.style.display = 'none'
    startBoard.style.display = 'none'
    playBoard.style.display = 'block'
    timeLeft = 10
    result = 0
    moveMole()
})

// try again page
function showTryagainBoard () {
    tryagainBoard.style.display = 'block'
    playBoard.style.display = 'none'
    finalScore.textContent = result
}