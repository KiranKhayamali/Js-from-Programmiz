async function myAsync() {
    let data = await fetch('https://api.programiz.pro/api/Demo/javascript/movies');
    let text = await data.text();
  
   return text;
}
console.log(myAsync()) // Output: Promise { <pending> }
myAsync().then((data) => console.log(data))

//Task 1:Create an async function named getData that fetches data from a URL and prints the data.
async function getData(){
    let data = await fetch("https://api.programiz.pro/api/Demo/javascript/valid");
    let text = await data.text();
    console.log(text);
}
getData(); 