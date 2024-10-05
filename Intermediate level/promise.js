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
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve(msg);
        }, 2000)
    })
};

message = prompt();
console.log(sucessMessage(message));

//task 2: function that returns a promise resolved with the input number
function add (number){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(number + 5);
        }, 2000)
    });
}

num = parseInt(prompt());
add(num)
    .then(num => parseInt(num))
    .then(data => console.log(data))

//task 3: function that returns a Promise that rejects with 'Something went wrong' error message. 
function promise(txt){
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve(txt);
        }, 200)
    })
}

text = prompt();
promise(text)
    .then(data => data.text())
    .then(data => console.log(data))
    .catch((error) => console.log("Something went wrong"))
    // always runs
    .finally(() => {
        console.log('Operation complete.');
    });
