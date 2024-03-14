var fib = [0,1];
let n,i = 0;
function fibinoci(n){                                              
      if (n == 1){
          const output = fib.pop();
          return console.log(fib);
          //console.log(output);
          //return console.log(output);


         }
      else if (n ==2 ){
         return console.log(fib);
        }
      else{ 
           
          
          for (var i = 0 ;i < n -1;i++){
          sum = fib[i] + fib[i+1];
          const newarr = fib.push(sum);
             //console.log(fib);
                 };
          console.log(fib);
          }

};
 
fibinoci(2);










