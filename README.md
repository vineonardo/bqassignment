# Diamond Sweeper

## The goal

The goal of this exercise is to build a game.

The rules of the game are as follows:

* The game board has 8x8 squares (initially, all represented by question marks)
* There are 8 diamonds hidden on the board, each diamond behind one of the squares
* When the user clicks on a square
    * If the square was hiding a diamond, the diamond appears
    * Otherwise, the square is opened, and blank
* The game ends when all diamonds are found. The user's score is the number of squares still left unturned.

## Technologies

Based on Ionic 1 with Angular 1.6

Requirements:

* node.js (the app was built against v8.1.4, but any node > 6 should work)
* npm
* Ionic CLI

To start the Application:

* Install the dependencies (via `yarn install` or `npm install`)
* Run App: `ionic serve`
* Browser window will open with webapp running with Live-reload enabled