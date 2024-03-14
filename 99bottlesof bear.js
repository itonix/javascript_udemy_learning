



function bottlesofbeer(){
    var n = 100; 
    while (n >= 2) 
    { 
      console.log( (n-1) +  " bottles of beer on the wall, " + (n-1) + "bottles of beer. ");
      console.log("   Take one down and pass it around, " + (n-2 )+ " bottles of beer on the wall."); 
       n--; 
    };
    
    
};



bottlesofbeer();