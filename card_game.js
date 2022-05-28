const readlineSync = require("readline-sync");

// getInput() is a function that takes a `prompt` as an argument which
// is a question (string) to ask the user.
// the returning value of getInput() is a string of whatever the user has typed as the response

function getInput(prompt) {
  return readlineSync.question(`${prompt}: `);
}

// YOUR CODE STARTS HERE!!

const cardValue = {
  "Ace Hearts": 1,
  "Ace Diamonds": 1,
  "Ace Spades": 1,
  "Ace Clubs": 1,
  "Two Hearts": 2,
  "Two Diamonds": 2,
  "Two Spades": 2,
  "Two Hearts": 2,
  "Three Hearts": 3,
  "Three Diamonds": 3,
  "Three Spades": 3,
  "Three Clubs": 3,
  "Four Hearts": 4,
  "Four Diamonds": 4,
  "Four Spades": 4,
  "Four Clubs": 4,
  "Five Hearts": 5,
  "Five Diamonds": 5,
  "Five Spades": 5,
  "Five Clubs": 5,
  "Six Hearts": 6,
  "Six Diamonds": 6,
  "Six Spades": 6,
  "Six Clubs": 6,
  "Seven Hearts": 7,
  "Seven Diamonds": 7,
  "Seven Spades": 7,
  "Seven Clubs": 7,
  "Eight Hearts": 8,
  "Eight Diamonds": 8,
  "Eight Spades": 8,
  "Eight Clubs": 8,
  "Nine Hearts": 9,
  "Nine Diamonds": 9,
  "Nine Spades": 9,
  "Nine Clubs": 9,
  "Ten Hearts": 10,
  "Ten Diamonds": 10,
  "Ten Spades": 10,
  "Ten Clubs": 10,
  "Jack Hearts": 11,
  "Jack Diamonds": 11,
  "Jack Spades": 11,
  "Jack Clubs": 11,
  "Queen Hearts": 12,
  "Queen Diamonds": 12,
  "Queen Spades": 12,
  "Queen Clubs": 12,
  "King Hearts": 13,
  "King Diamonds": 13,
  "King Spades": 13,
  "King Clubs": 13,
}



function buildDeck() {
  const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
  const ranks = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"]
  const deck = []

  for (let s = 0; s < 4; s++) {
    for (let r = 0; r < 13; r++) {
    deck.push(ranks[r] + " " + suits[s]);
  }
}
return deck;
}

// STEP ONE - Building A Deck.
//buildDeck.push and position array
// 1. use a function declaration to create a buildDeck function.
// 2. inside the buildDeck function, create an array called "suits" that lists all four suits from a deck of card as strings.
// 3. inside the buildDeck function, create a 2nd array called "ranks" that lists all 13 cards from ace to King as strings.
// 4. inside the buildDeck function, create an empty array called "deck"
// 5. inside the buildDeck function, create a for loop INSIDE of another for loop. The outer loop should loop through the ranks. The inner loop should loop through the suits. Make sure to use different variables for your iterators.
// 6. inside your inner for loop, push your looped iterations of ranks and suits as OBJECTS into the empty deck array. Add a third property to this object with the key "value" and the value equal to the current iterator.
// HINT: The result of step 6 is that each card will be an object inside of the deck array, for example [{suit: "diamonds", rank: "A", value: 0}, {suit: "diamonds", rank: "2", value: 1},...{etc}]. For example, if we wanted to organize the players and teams of the NBA with index numbers, we could write: nba.push({player: players[i], team: teams[n], index: i})
// 7. After your loops, return deck, which should now return an array full of card objects if you were to run buildDeck().


function shuffle () {
  let deck = buildDeck();
  let currentIndex = deck.length, temporaryValue, randomIndex;
  
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = deck[currentIndex];
    deck[currentIndex] = deck[randomIndex];
    deck[randomIndex] = temporaryValue;
  }
  return deck;
}
// console.log(shuffle(buildDeck()));


// STEP TWO - Shuffling your deck
// 1. use a function declaration to create a function called shuffle that takes deck as an argument.
// 2. Inside this function create a variable called "shuffledDeck" that takes deck as its value.
// 3. Using "let" declare three new variables: currentIndex, whos value should equal the length of the deck array, and two more: temporaryValue and randomIndex, each of which should currently have no value assigned.
// 4. Create a while loop whos condition is that "currentIndex" does not equal 0, so that we stop looping once we've gone through all 52 cards.
// 5. Inside the while loop, use the javascript Math.methods to generate a random integer between 0 and "currentIndex"
// 6. Inside the while loop, decrement current index by 1. (should be after step 9)
// 7. Inside the while loop, assign "temporaryValue" with "shuffledDeck" (which is an array) to the [currentIndex].
// 8. Still inside, assign "shuffledDeck[currentIndex]" a value of shuffledDeck to the [randomIndex]
// 9. Still inside, assign "shuffledDeck[randomIndex]" a value of "temporaryValue".  (currentIndex //i--;)
// 10. Review the code from steps 7,8, and 9, and leave a comment explaining what you believe those lines of code are doing as they swap assignments of values between them.
// 11. Finally, close the while loop and return "shuffledDeck". You should now be able to run shuffle(buildDeck()) in node and see your shuffled deck of cards.


function greet() {
  console.log("---------------------------------------------")
  let name = getInput("Welcome the Guessing Card Game, please enter your name");
  console.log("---------------------------------------------");
  console.log("Hello " + name + "! We hope you enjoy our game!");
  console.log("---------------------------------------------");
  return name;
}

// STEP THREE - Greeting the player
// 1. Declare a function called greet()
// 2. Inside that function, declare a variable called "name" and use "getInput()" to welcome the user to the game, ask for their name, and assign their answer.
// 3. Console.log name
// 4. return name
// 5. Done.

function compare (cardOne, cardTwo) {
  cardValueDifference = cardOne - cardTwo;
  return cardValueDifference;
}


// STEP FOUR - comparing cards
// 1. declare a function called compare that takes two cards as arguments
// 2. return the value property of the first card minus the value property of the second card.


function guess(originalCard, guessCard) {
  input = getInput("Please type in 'h' for higher or 'l' for lower if you think the next card will be higher or lower than your current card?") 

  if (input == "h") { 
      total = compare(cardValue[originalCard], cardValue[guessCard]) 
      if (total < 0) {
        return total;
      } else if (total > 0) {
        return false;
      }
    } else if (input == "l") {
      total = compare(cardValue[originalCard], cardValue[guessCard]) 
      if (total > 0) {
        return total; 
      } else if (total < 0) {
        return false;
      }
    } else {
      console.log("INCORRECT INPUT, please only type 'h'\nor 'l' if you think the next card\nis going to" +
      " be higher or lower than\nyour current card. No points will be\ncredited this round.")
      guess(originalCard, guessCard);
    }
 return total;
}

// STEP FIVE - Respond to User Guess
// 1. declare a function called guess that takes two cards as arguments
// 2. console.log the rank and suit of the current card
// 3. declare a variable called "input" that uses getInput() to ask the user if they think the next card will be higher (h) or lower (l) than their current card and stores the user's response.
// 4. use a conditional statement to see if "input" equals "h" or "l".
// 5. If input equals h, return an expression that checks if the outcome of the compare function (using the same arguments as you used for guess) is a negative number.
// 6. If input equals l, check and see if it's a positive number.
// 7. If input doesn't equal h or l, tell the user that they need to guess either h or l and that they get no points for this round, then return false.


function playGame() {                                     /* STEP 1 */
  let deck = shuffle(buildDeck());                        /* STEP 2 */
  let playerName = greet();                               /* STEP 3 */
  let score = 0;                                          /* STEP 4 */
  currentCard = deck.splice(-1,1);                        /* STEP 5 */
  console.log("Your card is: " + currentCard);


  while (score < 5 && score < deck.length) {              /* STEP 6 */
    nextCard = deck.splice(-1,1);                         /* STEP 7 */

    if (guess(currentCard, nextCard)) {                   /* STEP 8 */
      score ++
      console.log('Correct, your score: ' + score)
      console.log("---------------------------------------------");
    } else {
      console.log('Incorrect answer no points are rewarded, your score: ' + score)
      console.log("---------------------------------------------");
    }
    if (score < 5){                                       /* STEP 9 */
    currentCard = nextCard;
    console.log('Your current card is: ' + currentCard);
    }
  }
  if (deck.length >= 0) {                                 /* STEP 10 */
    console.log("Congrats you have Won!")
  } else {
    console.log("You lost, good luck next time")
  }
}
playGame()                                                /* STEP 11 */

// STEP SIX - Let's play!
// 1.X declare a function called playGame
// 2.X declare a variable called deck (it's okay to reuse -- remember scope!) that takes the result of the shuffle function.
// Remember that the shuffle function needs to take the results one of our other functions as its argument...
// 3.X declare a variable called playerName that takes the result of the greet function as its value.
// 4.X using let, declare a score variable that's currently set to the number zero
// 5.X use an array method on deck to remove the last object in deck. using let, declare a variable called currentCard and assign
// it this value.
// 6.X create a while loop whos conditions are that score is less than five AND less than the amount of items still in the deck array.
// 7.X Inside the while loop, use an array method on deck to remove the last object and assign that value to a variable named nextCard.
// 8.X Inside the while loop, create a conditional statement. If the outcome of guess is true, increment the score by 1, congratulate 
// the user, and tell them their score. If it's false, tell them they were wrong and got no points.
// 9.X Close the conditional statement and assign nextCard to currentCard. You may have to write this as the type of variable that's
//  always global...
// 10. Close the while loop and use a ternary statement that checks if the length of the deck array has reached zero. If it has not,
// tell the user that they won. If it has reached zero, tell them that they're out of cards and they lost.
// 11. Write a line of code to execute the playGame function.
