"use strict";

const numberOfFilms = prompt("Сколько фильмов вы смотрели", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

let i = 0;

while (i < 2) {
    let checkAnswer = true;
    while (checkAnswer == true) {
        checkAnswer = true;
        const firstQuestion = prompt("Один из последних просмотренных фильмов", ""),
            secondQuestion = prompt("На сколько оцените его?", "");
        if (firstQuestion !== '' && secondQuestion !== '' &&
            firstQuestion !== null && secondQuestion !== null && firstQuestion.length < 50 && secondQuestion < 50) {
            personalMovieDB.movies[firstQuestion] = secondQuestion;
            console.log('done');
            checkAnswer = false;
        } else {
            console.log('error');
        }
    }
    i++;
}

console.log(personalMovieDB);