//function daysleft(inyears){
    //in 90 years
    
 /*   var noofdays = 32872.5;
    var noofweeks = 4696.07;
    var noofmonths = 1080;
    
    var custweek = inyears * 53;
    var custmonths = inyears * 12;
    var custdays = inyears * 365;
    
    custweek = noofweeks - custweek;
    custmonths = noofmonths - custmonths;
    custdays = noofdays - custdays;
    
    console.log("you have " + custweek + " weeks left" );
    console.log("you have " + custmonths + " months left ");
    console.log("you have " + custdays + " days  left");
    
    
    }
    
    daysleft(59);
    */

    //no of bottlees rot bot can buy 1.5$ each

/*###################################################################################### */


function getmilk(money,costperbottle) {

    //var bottles = money / 1.5;    calculate no of bottles function
    //getbottles(money,1.5);

    // var change = money % 1.5;   calculate change function
    //getchange(money,1.5);
    console.log("you have bought " + getbottles(money,costperbottle) + " bottles of milk and you have change of " + getchange(money,costperbottle)  );
    

}

function getbottles(money,costperbottle){

    var bottles = money / costperbottle;
    return Math.trunc(bottles);
}
function getchange(money,costperbottle){

    var change = money % costperbottle;
    return change;
}

getmilk(10,7);

// comments added 