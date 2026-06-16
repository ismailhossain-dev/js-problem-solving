/*Problem 37: Retry a Promise  [Medium]
Description: Write a function retry(fn, times) that calls an async function fn up to times times, retrying if it throws an error. Resolves on first success, rejects after all attempts fail.
Example:
await retry(unstableFetch, 3);// Tries up to 3 times before failing
Hint: Use a loop with try/catch; only throw after all retries are exhausted.*/

let attempts = 0;

async function unstableFetch() {
    attempts++;

    console.log("Attempt:", attempts);

    if (attempts < 3) {
        throw new Error("Request Failed");
    }

    return "Data Loaded";
}

async function retry(fn, times) {
    let lastError;

    for (let i = 0; i < times; i++) {
        try {
            return await fn();
        } catch (error) {
            lastError = error;
        }
    }

    throw lastError;
}

retry(unstableFetch, 3)
    .then(console.log)
    .catch(console.error);


//output Attempt: 1
// Attempt: 2
// Attempt: 3
// Data Loaded