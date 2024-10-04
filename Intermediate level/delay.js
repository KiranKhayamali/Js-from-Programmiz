//SetInterval and setTimeout functions
let intervalVariable = setInterval(function() {
    console.log('This message repeats every 3 seconds.');}, 3000); // 3000 milliseconds = 3 seconds
  
setTimeout(() => {
    clearInterval(intervalVariable);}, 10000);


    