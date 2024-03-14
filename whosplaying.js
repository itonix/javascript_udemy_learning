var friends = [];

function whosPaying(names) {
    
/******Don't change the code above*******/
    
    //Write your code here.
 friends.push(names);
 var len = friends.length;
 var winner = getRandomInt(min, len);
 console.log(winner);
};

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  };
  

whosPaying(tony);


   
    
    
      

  




