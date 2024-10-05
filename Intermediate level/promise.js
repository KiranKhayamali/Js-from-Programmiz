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

//task 1: function to create a promise that resolves with a message after 2 seconds
function sucessMessage(msg) {
    setTimeout(() =>{
        console.log(msg);
    }, 2000)
};

message = prompt();
sucessMessage(message);
