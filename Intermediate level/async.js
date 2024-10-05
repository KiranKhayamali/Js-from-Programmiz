async function myAsync() {
    let data = await fetch('https://api.programiz.pro/api/Demo/javascript/movies');
    let text = await data.text();
  
   return text;
}
console.log(myAsync()) // Output: Promise { <pending> }
myAsync().then((data) => console.log(data))
