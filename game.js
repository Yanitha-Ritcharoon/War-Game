/* Game War for 2 players 
classes: Card, Deck, Player
*no need to accept any user input, the entire game should play out instanly without user input
1. deal 26 cards to each Player from a deck of 52 cards
2. Iterate through the turns where each Player plays a card
3. who played get higher card is awarded a point - ties result in zero points for both Players
4. after all cards have been played, disply the score and declare the winner
5. write a Unit Test using Mocha and Chai for at least one of the functions you write*/

alert ('Are you ready for the War?!');

// set arrays for cards
var SUITS = ["clubs", "diamonds", "hearts", "spades"];
var VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

// create 52 cards
class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    } 
}

// create deck for manage the cards
class Deck {
    constructor() {
        this.cards = []
        this.createCards()
        console.log(this.cards)
    }
    createCards() {
        for (let i = 0; i < SUITS.length; i++) {
            for (let x = 0; x < VALUES.length; x++) {
                //calling the constructor Card to make a new card
                //this card need to recieve from class Card
                this.cards.push(new Card(SUITS[i], VALUES[x]))
                //you can use console.log to check if the code working
            }
        }
    }

    // create shuffle function to random card for each players
    shuffle() {
        this.shuffledCards = [] 
        for (let i = this.cards.length - 1; i > 0; i--) {
            let x = Math.floor(Math.random() * i);
            let temp = this.cards[i];
            this.cards[i] = this.cards[x];
            this.cards[x] = temp;
        }
    }

    // deal the cards to player by split half of 52 cards to 26 cards per each
    deal() {
        for (let i = 0; i < 2; i++) {
            if (i % 2) {
        console.log("player1", this.cards.slice(26));
        // rewirte to code
        console.log("player2", this.cards.slice(26));
        }
    }
}
}

// create how the game is going
class Game {
    constructor(rank) {
        this.rank = rank
        this.deck = new Deck() // the action that need to happen for the game
        this.deck.shuffle()
        this.deck.deal()
    }
    //take turn: Iterate through the turns where each Player plays a card

    //compare each cards to get score
    compare() {
        //who get higest score get 1 point
        /* if (player1.rank > palyer2.rank) {
            console.log("Player1 get one point");
        } else if (player1.rank < player2.rank) {
            console.log("Player2 get one point");
        } else (player1.rank = player2.rank) { 
            //if ties get o point 
            console.log("You are tie, no score!");
        }
    }
    keep score properites on player , player2.score += 1
    score() {
        let player1.score = 0;
        let player2.score = 0;
        do {
            console.log(player1.score;
            player1.score += 1;
        }   while(iterator <=26); 
    }
        do {
            console.log(player2.score;
            player2.score += 1;
        }   while(iterator <=26); 
    }

    }
    // the end of the for lop length the card  let i = 0; i < player1.cards.length, i++  (same thing) this.cards.push(new Card(SUITS[i], VALUES[x])) 

    totalScore() {
        //show the final score and winner: sum score of each player
        for (let hand1 = 0; hand1 < player1.cards.length, hand1++) {
            for (let hand2 = 0; hand2 < player2.cards.length, hand2++)
            this.rank.push(new Score(player1[hand1], palyer2[hand2]))
        }
        if (player1.totalScore > player2.totalScore) {
            console.log("Player1 is the winner!");
        } else if (player1.totalScore < player2.totalScore){
            console.log("Player2 is the winner!")
        } else {
            console.log("Tie Score, No Winner!")
        }
    }

    
    
    
    //throw new Error: (Maybe who won if ties get error)
  can pick any function to do this test */
} }

class Player {
    constructor(player1, player2) {
        this.player1 = player1
        this.player2 = player2
    }
}


new Game("player1", "player2")




/* 
1 shuffle cards
2 split cards 26 cards per each / half of 52 cards
3 open card of each player - take turn
4 compare each cards to get score
5 who get higest score get 1 point
6 if ties get o point 
7 show the final score and winner
8 create Mocha and Chai with one function */

 // who get higest score get 1 point
    // if ties get o point 
    // player will have thrie own class
    // get score 
    // use splice to deals 26 cards or for loop even or odd 
    // player1Score > player2Score
    // use if else for score
    // high card award 1 point 
    
