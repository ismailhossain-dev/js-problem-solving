// Problem 4: Celsius to Fahrenheit  [Easy]
// Description: Write a function toFahrenheit(celsius) that converts a Celsius temperature to Fahrenheit.
// Example:
// Input: 0   → Output: 32Input: 100 → Output: 212
// Hint: Formula: (C × 9/5) + 32


//===============Problem-4 solve=================


function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

console.log(toFahrenheit(0));    // 32
console.log(toFahrenheit(100));  // 212
