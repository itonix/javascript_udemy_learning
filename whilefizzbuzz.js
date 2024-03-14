var people = [];


function fizzbuzz(){
    
    let i = 0;
    while (i < 100) {
        if (i % 3 == 0 &&  i % 5 == 0) {
            people.push("fizzbuzz");
        }
        else if (i % 3 == 0 ){
            people.push("buzz");

        }
        else if(i % 5 == 0){
            people.push("Buzz");

        }
        else {
            people.push(i);
        }
      i++;
    }
    
    console.log(people);
    // Expected output: 3
    



}




fizzbuzz();