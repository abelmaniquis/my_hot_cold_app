$(document).ready(function(){
    var guess,  //user's guess
    tries = 0,
    guesses = [],   //list of the past guesses
    actualNum = parseInt((Math.random()*100),10);
   // userinput,
   // tries = 0 //count the number of tries
    
    
/*-------Instructions-----------------------------------------------------------------------------------------*/
	/*--- Display information modal box ---*/
		$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
    	$(".close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
/*--------------------------------------------------------------------------------------------------------------*/
        $(".new").click()
        $("#guessButton").click(function(){
 	        var guess=$('#userGuess').val();
 	        checkuserinput(guess);
  	        alert(evaluate(guess));
  	        trackguesses(guess);
  	});


function newGame(){
    resetVariables();
}
function getGuess(){
    guess = $("#userGuess").val();
}

function evaluate(guess){
    var diff = Math.abs(actualNum - guess);
    
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
        return('freezing');
    }
}

function resetVariables(){
    tries = 0;
    guesses = [];
}

function newGame(){
    resetVariables();
    alert(tries);
}
 
function trackguesses(player_guess){
    guesses.push(player_guess);
    console.log(guesses);
}

function checkuserinput(player_guess){
    if(player_guess < 0){
        alert("Please give me a value greater than 0");
    }
    if(guesses.indexOf(player_guess) > -1){
        alert("you have already guessed that nmber");
    }
}

});
