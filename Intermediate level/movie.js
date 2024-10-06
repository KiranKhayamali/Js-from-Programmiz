function fetchMovieData(url) {
    return fetch(url)
        .then(response =>  response.json())
        .catch(error => {
            console.error("There was a problem with the fetch operation:");
            return null;
        });
}

async function main() {
    const URL = "https://api.programiz.pro/api/Demo/javascript/movies";
    const movieData = await fetchMovieData(URL);

    console.log(movieData);
}

main();