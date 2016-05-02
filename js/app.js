"use strict"

(function() {

    var guesses = [], //list of the past guesses
        tries = 0,
        actualNum = parseInt(Math.floor((Math.random() * 100), 10));
    
$("#guessButton").click(pageAction)
$(document).keydown(enterPressed);

/*--------------------------------------------------------
functions
---------------------------------------------------------*/

function pageAction(){
    var guess = $('#userGuess').val();
    $("#feedback").text(evaluate(guess));
    $("#count").text(tries);
    $("#userGuess").val('');
}

function enterPressed(e){
      if(e.keyCode == 13){
    var guess = $('#userGuess').val();
    $("#feedback").text(evaluate(guess));
    $("#count").text(tries);
    $("#userGuess").val('');
   } 
}

/*--- Display information modal box ---*/
function instructions() {
    $(".what").click(function () {
        $(".overlay").fadeIn(1000);
    });

/*--- Hide information modal box ---*/
    $(".close").click(function () {
        $(".overlay").fadeOut(1000);
    });
    }

    $('.new').click(function () {
        newGame();
    });

function newGame() {
    $('#guessList li').remove();
   // guesses = [];
    tries = 0;
    $("#count").text('0');
    $('#feedback').text('Make your Guess!');
    $('#userGuess').val('');
    actualNum = parseInt(Math.floor((Math.random() * 100), 10));
}

function evaluate(guess) {
    
    if (guess > 100) {
        $('#feedback').text('Please enter a number less or equal to 100');
    } else if (guess <= 0) {
        $('#feedback').text("Please give me a value greater than 0");
    } else if (guesses.indexOf(guess) >= 0) {
        $('#feedback').text("you have already guessed that number");
    } else {

    tries++;
    guesses.push(guess);
    $('#guessList').append('<li>' + guess + '</li>');

    var diff = Math.abs(actualNum - guess);


    if (diff === 0) {
        $('#feedback').text("Correct! Your game will restart in 3 seconds!");

        setInterval(function () {

            return newGame();

        }, 3000);

    }else if (diff <= 5){
        $('#feedback').text("scalding");
    }else if (diff <= 10) {
        $('#feedback').text("burning");
    } else if (diff <= 20) {
        $('#feedback').text("hot");
    } else if (diff <= 30) {
        $('#feedback').text("warm");
    } else if (diff <= 40) {
        $('#feedback').text("cool");
    } else if (diff < 50) {
        $('#feedback').text("cold");
    } else if (diff >= 50) {
        $('#feedback').text('freezing');
    }

    }
}
}());


/*
You must use the HTML and CSS supplied. Once you've completed the project, 
you may choose to alter the layout and styles, but stick with the templates supplied initially. 
Note that the index.html file already links to the CSS files, app.js file and jQuery. 
You should write your JavaScript code in app.js. Also, note that there is a small amount 
of code in app.js - there's a $(document).ready() block with code that handles displaying 
and hiding the instructions for the game.

When the page loads, JavaScript should start a new game. Since you'll need to be able to 
start a new game when the user clicks the "New Game" button, you'll want to create a 
newGame function that does everything necessary to start a new game.

When a new game starts, a secret number between 1 and 100 should be generated that the user 
will have to guess. You should write a named function that takes care of this. 
You should try to start a new game without refreshing or reloading the page.

The user should get feedback about each guess – if it was too low, too high, or just right. 
This means that you'll need to write a named function that takes a user guess and determines 
which feedback to provide.

Initially, you shouldn't worry about telling users if they're getting "hotter" or "colder" 
relative to their previous guess. Instead, you can use absolute values. For instance, you 
might decide that if a user is 50 or further away from the secret number, they are told they are 
"Ice cold", if they are between 30 and 50 they are "cold", if they are between 20 and 30 they 
are warm, between 10 and 20 hot, and between 1 and 10 "very hot". You can choose what the ranges 
are and what feedback you provide.

Feedback about the guess should appear in div#feedback. By default, when the page loads, 
the text in this field is set to "Make Your Guess!"

The game should track how many guesses the user has made. Feedback about this should appear 
in span#count (which defaults to 0, when the page loads).

The game should also supply users with a list of the numbers they have guessed so far. The CSS 
for this game is set up in such a way that you can simply add each guessed number as an <li> to 
ul#guessList.

You'll need to ensure that users provide valid inputs. Note that the guess text input field has the 
HTML 5 required flag set, so you won't have to worry about blank guesses being submitted 
(if the user submits a blank guess, they'll be prompted to supply an input). However, you 
will need to write code that ensures that the user has supplied a numeric input between 1 and 100.


less global variables is better
Always start if statements from greatest to lowest values





your task:

remove all global variables.
fix the tries box so that the tries don't extend outside of the 
*/
