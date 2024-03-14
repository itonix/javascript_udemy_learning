function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here.   
    
        /*2000 ÷ 4 = 500 (Leap)

        2000 ÷ 100 = 20 (Not Leap)
        
        2000 ÷ 400 = 5 (Leap!) */
        let value;
        if ((year%4 == 0 ) || (year%400 == 0) && (year%100 !=0)){

            value = "Year "  + year + " is a leap year.";
        }
        else {
            value = "Year " + year + " is not a leap year.";
        }
        return value;
        
    
    
    
     }
    
        
    
    /**************Don't change the code below****************/    
    
    console.log(isLeap(1998));