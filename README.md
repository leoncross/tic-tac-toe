# tic-tac-toe

My approach:

I created this following a strict TDD development cycle - I started by writing my first smallest test, saw that fail, then wrote the smallest possible code to see that pass. As features became bigger (i.e, my game rules), refactored them by extracting it out into its own class.

Within this code, as this is purely the business logic, I did not focus on any front end visuals. For example, my players are called '-1' and '1', because thats the easiest way to handle the data. This could easily be accessed on the front end and changed to 'O' and 'X' respectively.

This code passes all tests, including features, as well as a Linter.

#How this code works:

To move, you need to give it a row number, and a column number. For example of how each field is labeled, please see below:

```

1, 1 | 1, 2 | 1, 3
______________
2, 1 | 2, 2 | 2, 3
______________
3, 1 | 3, 2 | 3, 3

```

Error cases have been considered: if you try to provide a wrong move (i.e., game.move(5, 5)) an error is shown. This is the same for when trying to move to a field that already has player piece

# How to run Tests / Linter:

For tests, I have used Jasmine. To run the tests, navigate to the file path of the SpecRunner file, and open it in your browser.

To run the linter (eslint), open your terminal, navigate to the project path, and type:

```
npn test

```
Note - a pass is blank, whereas an error is indicated by listing the errors.

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
