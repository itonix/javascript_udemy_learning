
var guest = ["james","tony","sid","john","dics"];

function guestlist(name){
    let gustfound;
    if (guest.includes(name)){
        gustfound = "You are welcome " + name +" .";
    }
    else
       gustfound = "try next time."

return gustfound;

  
}

prompt("Enter your name.");