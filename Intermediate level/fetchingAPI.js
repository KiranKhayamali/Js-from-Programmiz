let api = fetch("https://api.programiz.pro/api/Demo/javascript/movies");

// console.log(api); //this give output as promises <pending>

api.then(response => {console.log(response);});


