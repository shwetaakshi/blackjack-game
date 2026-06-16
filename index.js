let player = {
    name: "Per",
    chips: 145
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let gameOver = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let playAgainBtn = document.getElementById("playAgainBtn")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13) + 1 
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame() {
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum:" + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        gameOver = true
    } else  {
        message = "You're out of the game!"
        isAlive = false
        gameOver = true
    }
    messageEl.textContent = message
    
    if (gameOver) {
        playAgainBtn.style.display = "block"
    }
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

function standGame() {
    if (isAlive === true && hasBlackJack === false) {
        message = "You chose to stand. Your final sum is " + sum
        isAlive = false
        gameOver = true
        messageEl.textContent = message
        playAgainBtn.style.display = "block"
    }
}

function playAgain() {
    cards = []
    sum = 0
    hasBlackJack = false
    isAlive = false
    gameOver = false
    message = "Want to play a round?"
    messageEl.textContent = message
    sumEl.textContent = "Sum:"
    cardsEl.textContent = "Cards:"
    playAgainBtn.style.display = "none"
}