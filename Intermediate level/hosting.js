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
