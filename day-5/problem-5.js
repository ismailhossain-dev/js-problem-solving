/*Problem 25: Memoize a Function  [Medium]
Description: Write a function memoize(fn) that caches the results of a function so repeated calls with the same input return the cached result.
Example:
const memoAdd = memoize(n => n + 10);memoAdd(5); // 15 (computed)memoAdd(5); // 15 (from cache)
Hint: Use an object as a cache inside the outer function.*/

//memize means => orno ekta function er value catch kore raka

function memoize(fn) {
    const cache = {};

    return function(n) {

        if (n in cache) {
            console.log("From Cache");
            return cache[n];
        }

        console.log("Computed");

        const result = fn(n);

        cache[n] = result;

        return result;
    };
}
const memoAdd = memoize(n => n + 10);
