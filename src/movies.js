// const movies = require('./data');
// ITERATION 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors = moviesArray.map(movie => movie.director)
    return directors;
}
//---------------------------------------------------
// ITERATION 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama') && movie.director.includes('Steven Spielberg'))
    return dramaMovies.length;
    // return dramaMovies.reduce((acc, movie) => acc + 1, 0);
}
//console.log(howManyMovies(movies));

//---------------------------------------------------
// ITERATION 3: All scores average - Get the average of all scores with 2 decimals
        
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
      }
    else{
        const totalScores = moviesArray
        .filter(movie => movie.score !== undefined)  //only movies that have a defined score
        .reduce((acc, movie) => acc+movie.score, 0); //for ea. movie the scores is added to acc -> total score
        return parseFloat((totalScores / moviesArray.length).toFixed(2)); //incl. all movies (w/o socre) string=num
    }
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
//https://www.youtube.com/watch?v=JLoK1ZBcC4o
//https://codedamn.com/news/javascript/javascript-round-a-number-to-2-decimal-places-with-examples

//---------------------------------------------------
// ITERATION 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
    return scoresAverage(dramaMovies);
}

//-------make a "copy" or "clone" an array.-----------
// ITERATION 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesCopy = [...moviesArray]
        .sort((a, b)=>{
        if (a.year !== b.year){
            return a.year - b.year;
        } else {
        // return a.title - b.title;
        return a.title[0].localeCompare(b.title[0]);
        }
    });
    return moviesCopy;
}
//https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
//https://www.codecademy.com/resources/docs/javascript/sort

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    //a new array of titles sorted
    const titles = [...moviesArray].map(movie => movie.title).sort();

    //new array with more than 20 elements
    const topTitles = titles.slice(0, 20); return topTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    // const movieMin = [...moviesArray].map(movie => movie.duration);

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}