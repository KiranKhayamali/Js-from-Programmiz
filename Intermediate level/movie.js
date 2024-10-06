function fetchMovieData(url) {
    return fetch(url)
        .then(response =>  response.json())
        .catch(error => {
            throw new Error("there was a problem with the fetch operation: " );
        });
}

function getHighRatedMovies(movies){
    if (!Array.isArray(movies)) {
        throw new Error("invalid data format: movies should be an array.");
    }
    return movies
        .filter(movie => movie.rating >= 9)
        .map(movie => movie.name);
}

async function main() {
    const URL = "https://api.programiz.pro/api/Demo/javascript/movies";
    try{
        const movieData = await fetchMovieData(URL);
        if(!movieData){
            throw new Error("Failed to fetch movie data.")
        }

        if(!Array.isArray(movieData.movies)){
            throw new Error("Invalid movie data format.")
        }
        console.log(movieData);

        console.log("\nMovies that have 9 or higher rating:")    
        console.log(getHighRatedMovies(movieData["movies"]));
    }catch(error){
        console.error("An error occured!!")
    }   
}

main();