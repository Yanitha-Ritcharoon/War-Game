/* Game War for 2 players 
1. deal 26 cards to each Player from a deck of 52 cards
2. Iterate through the turns where each Player plays a card
3. who played get higher card is awarded a point - ties result in zero points for both Players
4. after all cards have been played, display the score and declare the winner
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
        /* use For loop to check if it gets all the correct cards
        for( let i = 0; i < this.cards.length; i++) {
            console.log(this.cards[i])
        } */
        
    }
    createCards() {
        for (let i = 0; i < SUITS.length; i++) {
            for (let x = 0; x < VALUES.length; x++) {
                //calling the constructor Card to make a new card
                //this card need to receive from class Card
                this.cards.push(new Card(SUITS[i], VALUES[x]))        
            }
        }
    }

    //shuffle cards to random card for each players
    shuffle() {
        this.shuffledCards = [] 
        for (let i = this.cards.length - 1; i > 0; i--) {
            let x = Math.floor(Math.random() * i);
            let temp = this.cards[i];
            this.cards[i] = this.cards[x];
            this.cards[x] = temp;
        }
    }

    // deal the cards to player
    deal (player, numCard) {
        for(let i = 0; i < numCard; i++) {
            //take the card off the desk
            player.cards.push(this.cards.pop())
            
        }
    } 
}

// create how the game is going
class Game {
    constructor(rank) {
        this.rank = rank
        this.deck = new Deck() 
        this.deck.shuffle()
        this.deck.deal()
        
        // split the cards for each player
        this.p1 = new Player()
        this.p2 = new Player()
        this.deck.deal(this.p1, 26)
        this.deck.deal(this.p2, 26)
        console.log("Player 1's Hand:\n", this.p1.cards)
        console.log("Player 2's Hand:\n", this.p2.cards)

        // make sure players have cards
        while(this.p1.cards.length > 0 && this.p2.cards.length > 0)
          this.turn();
        
        //display show which player won  
       if(this.p1.points > this.p2.points) 
          console.log(`Player 1 won the tournament! They had ${this.p1.points} pts, which is more than Player 2's ${this.p2.points} pts.`)
        else if (this.p1.points < this.p2.points)
          console.log(`Player 2 won the tournament! They had ${this.p2.points} pts, which is more than Player 1's ${this.p1.points} pts.`)
        else
          console.log(`The tournament ended in a tie, with ${this.p1.points}`) 
    }

    //take turn
    turn() {
        let p1c = this.p1.cards.pop()
        let p2c = this.p2.cards.pop()
        let winner = compare(p1c, p2c)
      
        console.log(`Player 1 has ${p1c.value} of ${p1c.suit} & Player 2 has ${p2c.value} of ${p2c.suit}`)
    
    // calculate the score of each player every time when they win
        if(winner == 1) {
            this.p1.points++
            console.log("Player 1 wins!")
        } else if(winner == -1) {
            this.p2.points++
            console.log("Player 2 wins!")
        } else
            console.log("It was a tie :(")
            // create space to the line: make it easier for read
         console.log("\n")
    }
}
    
// declare value of cards
function valueOf(card) {
    switch (card.value) {
        case '1':
            return 1;
        case '2':
            return 2;
        case '3':
            return 3;
        case '4':
            return 4;
        case '5':
            return 5;
        case '6':
            return 6;
        case '7':
            return 7;
        case '8':
            return 8;
        case '9':
            return 9;
        case '10':
            return 10;
        case 'J':
            return 11;
        case 'Q':
            return 12;
        case 'K':
            return 13;
        case 'A':
            return 14;
  }
}

// compare value of card of each player
function compare(card1, card2) {
    // if player1 has highest card get 1 point
    if(valueOf(card1) > valueOf(card2))
        return 1;
    // if player1 and player2 tie get noting
    else if (valueOf(card1) == valueOf(card2))
        return 0;
    // if player1 had lowest card lose 1 point
    else
        return -1;
}

class Player {
    constructor() {
        this.cards = []
        this.points = 0
    }
}

var game = new Game()

