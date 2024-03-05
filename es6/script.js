// Promise example
function buyToyPromise() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("Parent: Buying the toy...");
            resolve("Toy");
        }, 2000);
    });
}

console.log("Child: Can you buy me a toy?");
buyToyPromise()
    .then(function(toy) {
        console.log("Parent: Here's your " + toy + ".");
    })
    .catch(function(error) {
        console.error("Error:", error);
    });
console.log("Child: Waiting for the toy...");
