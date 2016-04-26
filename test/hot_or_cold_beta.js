function hot_and_cold_game(guess){
    var number = parseInt((Math.random()*100),10)
    var diff = Math.abs(number - guess);
    
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
            return("cold")
        }
        else if(diff >= 50)
        {
            return("freezing");
        }
    }
    