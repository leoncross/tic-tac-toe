# tic-tac-toe

My approach:

I created this following a strict TDD development cycle, with focus on refactoring according to the Single Responsibility Principle - I started by writing my first smallest test, saw that fail, then wrote the smallest possible code to see that pass. As features became bigger (i.e, my game rules), refactored them by extracting it out into its own class. Please view my commits to evidence this.

Within this code, as this is purely the business logic, I did not focus on any front end visuals. For example, my players are called '-1' and '1', because thats the easiest way to handle the data (I calculate a win if scores equal to either -3 or +3). This could easily be accessed on the front end and changed to 'O' and 'X' respectively.

This code passes all tests, including features, as well as uses a Linter.

# How this code works:

To play (move), you need to give it a row number, and a column number. For example of how each field is labeled, please see below:

```

1, 1 | 1, 2 | 1, 3
______________
2, 1 | 2, 2 | 2, 3
______________
3, 1 | 3, 2 | 3, 3

```

This therefore requires the user to engage with the business logic by communicating with it as such:

- game.move(1, 1)
- game.move(1, 2)

All code that is not intended for the user is encapsulated - they cannot engage with moves, game status, or turn changer (etc.) without communicating with the application as intended.

Finally, the following Error cases have been considered:
1. on field taken - you cannot play the same position as an already taken piece
2. on invalid player movies (i.e., game.move(5, 5) will result in error)
3. on game completion - if the game is drawn or won, the game cannot continued to be played.

These were deliberately refactored out of the Game.js file with the expectation of enabling scalability if intended.


# How to run Tests / Linter:

For tests, I have used Jasmine. To run the tests, navigate to the file path of the SpecRunner file, and open it in your browser.

To run the linter (eslint), open your terminal, navigate to the project path, and type:

```
npn test

```
Note - this returns a silent pass, whereas an error is indicated by listing the errors. To evidence this, comment out the 'import' lines (line 1 and 2) in the Game.js file and rerun the tests - this should now produce a fail.

# To play the game in the console:

Open up the index.html file in your web browser, and use the following commands to win:

```
game = new Game
game.move(1, 1)
game.move(1, 3)
game.move(2, 2)
game.move(1, 2)
game.move(3, 3)

```

## The brief

The rules of tic-tac-toe are as follows:

* There are two players in the game (X and O)
* Players take turns until the game is over
* A player can claim a field if it is not already taken
* A turn ends when a player claims a field
* A player wins if they claim all the fields in a row, column or diagonal
* A game is over if a player wins
* A game is over when all fields are taken

Build the business logic for a game of tic tac toe. It should be easy to implement a working game of tic tac toe by combining your code with any user interface, whether web or command line.
