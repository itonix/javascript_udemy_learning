function bmiCalculator (weight, height) {
    var bmi = Math.trunc((weight / Math.pow(height, 2)));
    console.log(bmi);
    let interpretation;
  
  if (18.5 <= bmi <= 24.9) {
            interpretation =  "Your BMI is " + bmi + " so you have a normal weight";
     
  /*  BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight." */
    }
  if (bmi < 18.5) {
           interpretation =  "Your BMI is " + bmi + " so you are underweight";
      //BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."//
    }
   if (bmi > 24.9) {
            interpretation =  "Your BMI is " + bmi + "so you are overweight.";
     
  
  //BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight."
  }
    return interpretation;
}







console.log(bmiCalculator(40,1.7));