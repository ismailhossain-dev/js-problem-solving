// Problem 4: Celsius to Fahrenheit  [Easy]
// Description: Write a function toFahrenheit(celsius) that converts a Celsius temperature to Fahrenheit.
// Example:
// Input: 0   → Output: 32 Input: celsiuse → Output: 212
// Hint: Formula: (C × 9/5) + 32


//===============Problem-4 solve=================

 const toFahrenheit = (celsius) => {
    return (celsius  * 9/5) + 32;
 }

 console.log(toFahrenheit(100))//output 212
// (celsiuse × 9/5) + 32

// = (celsiuse × 1.8) + 32

// = 180 + 32

// = 212

console.log(toFahrenheit(0))

// (0 × 9/5) + 32
// = 0 + 32
= 320
