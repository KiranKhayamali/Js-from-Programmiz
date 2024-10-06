//variable hosting
function printMessage(){
    message = "Hello";
    
    // use the message variable before declaration
    console.log(message); // Output: Hello
    
    // variable declaration using var keyword
    var message;
 
}

printMessage();

//function hosting
greeting(); 

function greeting() {
  console.log("Hello!! I am your chat assistant.");
}

//Task :JavaScript Hoisting

console.log(hoistedVar);
hoistedVar = "This variable is hoisted";
var hoistedVar;
console.log(hoistedVar);

hoistedFunction();

function hoistedFunction(){
    console.log("This function is hoisted");
}
