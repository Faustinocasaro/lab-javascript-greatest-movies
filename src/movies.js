// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((eachMovie) => {
        return eachMovie.director
    })
    return directors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {}
function howManyMovies(moviesArray) {
    const spelbergMovies = moviesArray.filter((eachMovie) => {
        return eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama')
    })
    return spelbergMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) { }
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const sumScores = moviesArray.reduce((acc, eachMovie) => {
        if (eachMovie.score !== undefined) {
            return acc + eachMovie.score
        } else {
            return acc
        }
    }, 0)

    const average = sumScores / moviesArray.length

    return (sumScores / moviesArray.length).toFixed(2) * 1
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) { }
function dramaMoviesScore(moviesArray) {

    const selectDrama = moviesArray.filter((eachMovie) => {
        const allDramaMovies = eachMovie.genre.includes('Drama')
        return allDramaMovies
    })
    return scoresAverage(selectDrama)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}
function orderByYear(moviesArray) {
    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))
    moviesArrayCopy.sort(function (a, b) {
        if (a.year < b.year) {
            return -1
        }
        if (a.year > b.year) {

            return 1
        }
        if (a.year === b.year) {
            if (a.title < b.title) {
                return -1

            }
        }
    })
    return moviesArrayCopy
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}
function orderAlphabetically(moviesArray) {

    const moviesArrayAlphaCopy = JSON.parse(JSON.stringify(moviesArray))

    const alphaOrder = moviesArrayAlphaCopy.map((eachMovie) => {

        return eachMovie.title
    })

    alphaOrder.sort() //why? shouldn't it be alphaOrder.sort((a, b) => {return a.title.localeCompare(b.title)}) ???

    if (alphaOrder.length > 20) {

        return alphaOrder.slice(0, 20)
    }

    return alphaOrder
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

