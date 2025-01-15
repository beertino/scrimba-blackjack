function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let sum = 0

let card_array = []

let hasBlackJack = false

let isAlive = true

function msg_out(sum) {
    if (sum <= 20) {
        return "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        hasBlackJack = true
        return "Wohoo! You've got Blackjack! 🥳"

    } else {
        isAlive = false
        return "You're out of the game! 😭"

    }  
}

function startGame() {
    
    let lastCard = getRandomInt(2,11)
    
    card_array.push(lastCard)
    
    sum += lastCard
    
    let message = msg_out(sum)
    
    document.getElementById("cards-el").textContent = `Cards: ${card_array}`
    document.getElementById("sum-el").textContent = `Sum: ${sum}`

    document.getElementById("message-el").textContent = message
}
