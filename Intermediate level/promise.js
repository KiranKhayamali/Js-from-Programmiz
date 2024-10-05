let myPromise = new Promise(function(resolve, reject) {
    // change this to false to see the rejection    
    let isPizzaAvailable = true;
    if (isPizzaAvailable) {
        // resolves the promise
        resolve("Pizza is ready!");
    } else {
        // rejects the promise
        reject("No pizza dough left!");
    }
});

console.log(myPromise);
