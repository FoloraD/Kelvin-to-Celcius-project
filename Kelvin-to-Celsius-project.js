//Challenge: Convert any given temperature in Kelvin to Fahrenheit

//Temperature in Kelvin stored in variable 'kelvinTemp'
var kelvinTemp = 301;

//Temperature in celsius stored in variable 'celsiusTemp'
var celsiusTemp = kelvinTemp - 271.15;

//convert celsius to fahrenheit stored in variable 'fahrenheitTemp'
var fahrenheitTemp = celsiusTemp *(9/5) + 32;

//round the value of fahrenheit to a whole number and assign to 'fahrenheitTemp'
 fahrenheitTemp = Math.floor(fahrenheitTemp);
 
 //use string concatenation to create message "The temperature is 'fahrenheitTemp' degrees Fahrenheit"

 console.log('The temperature is ' + fahrenheitTemp + ' degrees Fahrenheit');