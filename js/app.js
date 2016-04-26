
var guess,
number,
pastguesses = [],
input

$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  	
  	//Start new game
  	
 //When a page loads, Javascript should start a new game. 	
function newGame(){
}

function getInput(){
    guess = input.val();
}

//A secret number between 1 and 100 should be generated 
function newNumber(){
    var number = parseInt((Math.random()*100),10);
}

//The user should get feedback for each guest- if it was too low or too high
//This should appear in div#feedback
//When the page loads, the text in this field is "Make your Guess!"
function feedback(){
    var diff = guess - number;
        if(diff == 0)
        {
            return("correct!");
        }
        else if(diff <= 10)
        {
            return("burning");
        }
        else if(diff <= 20)
        {
            return("hot");   
        }
        else if(diff <= 30)
        {
            return("warm");
        }
        else if(diff <= 40)
        {
            return("cool");
        }
        else if(diff < 50)
        {
            return("cold");
        }
        else if(diff >= 50)
        {
            return("freezing");
        }
}	

//Track how many guesses the user has made.
function tracker(){
    
}

//Supply users with a list of numbers they have guessed so far
//Add as <li> to ul#guessList
function list(){
    
}

//You'll need to ensure that users provide valid inputs. 
//If the user provides a blank guess, they will be prompted to supply a valid input
function checkvalidinput(){
    if(parseInt(guess,10) !== guess){
        alert('please input a number');
    }
    else if((guess < 0)||(guess > 100)){
        alert('please input a number between 0 and 100');
    }
}

//Once button is clicked, must start a new game.
//This function might not be needed
function startnewGame(){
    
}



});


