// Problem 1: Swap Two Variables  [Easy]
// Description: Write a function that swaps the values of two variables without using a third variable.
// Example:
// Input: a = 5, b = 10 Output: a = 10, b = 5
// Hint: Try using destructuring or arithmetic operators.

//=====================================================

//I will try to solve problem in function

const swap = (a, b) => {
   a = a + b; //15 2ta valu + hoiche
   b = a - b; // 10 -5 = 5;  b er value 5 bahir korchi
   //console.log("hello",a)//15
   a = a -b; //10 a er man
   //console.log("a value", a)//ouput hobe 10
    
   //return {d, e} //retun ek value return kora jai tai amra {} diye 2 ta value return korlam
    return {a, b}; 

}
 //console.log (swap(5, 10))//output a = 10 ; and b = 5; alhamdulillah solve problem

