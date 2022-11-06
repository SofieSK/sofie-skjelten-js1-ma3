//answer question 2

const API_URL = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=107ef94c66354fbdbba2a8f94c12d171";


async function getGames() {
    const response = await fetch(API_URL);
    const results = await results.json();

    console.log(results);

}

getGames();