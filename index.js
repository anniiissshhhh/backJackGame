//? 1. Create two variables, firstCard and secondCard
//? Set their values to random values between 2-11

//? 2. Create a variable, sum, and set it to the sum of the two cards

// let firstCard = getRandomCard();
// let secondCard = getRandomCard();
// let cards = [firstCard, secondCard];
// let sum = firstCard + secondCard; //! SHOULD NOT BE DEFINED HERE
// let sumEl = document.getElementById("sum-el");

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

// let playerName = "Per";
// let playerChips = 145;
let player = {
    name: "Per",
    chips: 145,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard > 10) {
        return 10;
    } else if (randomCard === 1) {
        return 11;
    } else {
        return randomCard;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum;

    // render out firstCard and secondCard
    cardsEl.textContent = `Cards: `;
    // render out all the cards we have
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += `${cards[i]} `;
    }

    if (sum < 21) {
        message = "Do you want to draw a new card?";
    } else if (sum == +21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    // console.log(message);
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive == true && hasBlackJack == false) {
        console.log("Drawing a new card from the deck");
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}

//? Check if a person is old enough to enter the nightclub (21)
//? Log a suitavle message in the console for both cases

// let age = 21;
// age >= 21 ?
//     console.log("Welcome!!") :
//     console.log("You can not enter the club!");

// console.log(`isAlive: ${isAlive}`);
// console.log(`hasBlackJack: ${hasBlackJack}`);

// if (age >= 21) {
//     console.log("Welcome!!");
// } else {
//     console.log("You can not enter the club!");
// }

// if (age < 100) {
//     console.log("Not Eligible!");
// } else if (age === 100) {
//     console.log("Here is your birthday card from the King!");
// } else {
//     console.log("Not Eligible, You've already gotten one!");
// }

//? MATH RANDOM
// It generates a random number between 0 and 1 (not inclusive of 1)
// 0.0000 to 0.9999

// let randomNumber = Math.random() * 6;
// console.log(randomNumber);

//? MATH FLOOR
// let flooredNumber = Math.floor(3.4231);
// console.log(flooredNumber);