/**
 * Problem 31: Debounce Function  [Medium]
Description: Write a debounce(fn, delay) function that delays invoking fn until after delay milliseconds have elapsed since the last time it was called.
Example:
const debouncedSearch = debounce(search, 300);// Fires only once after user stops typing for 300ms
Hint: Use clearTimeout and setTimeout.
 */

//=====================PROBLEM-32 SOLVE ===========

//setTimeut er vitor fn function ta call hobe

//======suronjit vai and mohebur vai problem ta amek bujaiche

const sabbir = (mobebur, delay) => {
    //setTimeout er vitore mohebur function take bole disi 300 mili section por call hobe
    setTimeout(() => {
        mobebur();
    }, delay);
}

//function ta 300 mili second por run hobe
const mobebur = () => {
    console.log("Thank you Suronjit vai + mohebur vai");
}

sabbir(mobebur, 300);