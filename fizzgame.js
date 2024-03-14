function fizzBuzz(value) {
     
    if(value > 0){
        if(value%3===0 && value%5===0){
            console.log("FizzBuzz");
        }
        else if(value%3===0){
            console.log("Fizz")
        }
        else if(value%5===0){
            console.log("Buzz")
        }
        return fizzBuzz(value - 1);
    } 
     return "End"
 }


console.log(fizzBuzz());