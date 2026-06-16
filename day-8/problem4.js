/**
 * Problem 39: Flatten Object (Deep)  [Medium]
Description: Write a function flattenObject(obj) that takes a deeply nested object and returns a flat object with dot-notation keys.
Example:
Input: {a: {b: {c: 1}}}Output: {'a.b.c': 1}
Hint: Use recursion; build the key by joining parent keys with dots.
 */

function flattenObject(obj) {
    const result = {};

    function helper(currentObj, parentKey) {
        for (let key in currentObj) {
            const value = currentObj[key];

            const newKey = parentKey
                ? `${parentKey}.${key}`
                : key;

            if (
                value !== null &&
                typeof value === "object" &&
                !Array.isArray(value)
            ) {
                helper(value, newKey);
            } else {
                result[newKey] = value;
            }
        }
    }

    helper(obj, "");

    return result;
}