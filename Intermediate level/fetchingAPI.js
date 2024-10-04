let api = fetch("https://api.programiz.pro/api/Demo/javascript/movies");

// console.log(api); //this give output as promises <pending>

api.then(response => {console.log(response);});


//only displaying names of movies from the given api
const endpointURL = 'https://api.programiz.pro/api/Demo/javascript/movies';
let fetchData = fetch(endpointURL);
fetchData
    .then(response => response.json()) //the response from the api is converted into json format first 
    .then(data =>
        {
            data.movies.forEach(movie => console.log(movie.name)); //extracting each movie name seperately
        }
    );