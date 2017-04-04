# CRYSTAL COLLECTOR GAME

## Overview

In this project a fun and interactive game for web browsers is created called 'crystal collector'. The app dynamically updates the HTML pages with the jQuery library.

## The app
The app enables the player to guess the answer a random question with numbers.

* There are four crystals displayed as buttons on the page.

* The player is shown a random number at the start of the game.

* When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

* The game hides this amount until the player clicks a crystal.

* When they do click one, the player's score counter is updated.

* The player wins if his total score matches the random number from the beginning of the game.

* The player loses if his score goes above the random number.

* The game restarts whenever the player wins or loses.

* When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

* The app then shows the number of games the player wins and loses. The page is not refreshed manually a means to restart the game.

## Game design notes:

* The random number shown at the start of the game is between 19 - 120.

* Each crystal has a random hidden value between 1 - 12.

## Procedure
* Create a GitHub repo called week-4-game, then clone it to the local computer.

* Inside the week-4-game folder, create the following: ```index.html```, ```composer.json``` and ```index.php```.

* Place the appropriate content in the composer.json and index.php files, so that the game could be deployed to Heroku.

* Inside the week-4-game directory, make a folder called assets.

  * Inside the assets directory, make three additional folders: javascript, css and images.
    * In the javascript folder, make a file called game.js.
    * In the css folder, make a file called style.css.
    * In the css folder, make a file called reset.css. Paste into it the code found from the [Meyerweb Reset](http://meyerweb.com/eric/tools/css/reset/).
    * In the images folder, save the images to be used in the app.

    * Push the above changes to GitHub.
