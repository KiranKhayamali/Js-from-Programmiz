function fetchMovieData(url) {
    return fetch(url)
        .then(response =>  response.json())
        .catch(error => {
            console.error("There was a problem with the fetch operation:");
            return null;
        });
}

function getHighRatedMovies(movies){
    return movies
        .filter(movie => movie.rating >= 9)
        .map(movie => movie.name);
}

async function main() {
    const URL = "https://api.programiz.pro/api/Demo/javascript/movies";
    const movieData = await fetchMovieData(URL);

    console.log(movieData);

    console.log("\nMovies that have 9 or higher rating:")    
    console.log(getHighRatedMovies(movieData["movies"]));
}

main();