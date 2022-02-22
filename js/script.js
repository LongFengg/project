"use sctrict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


let i = 1;

do {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
             b = prompt('На сколько оцените его?', '');

             if(a != null && b != null && a != '' && b != '' && a.length < 50){
                personalMovieDB.movies[a] = b;  
                console.log('done');
                i++;
             } else{
                 console.log('Error');
             }
} while(i <=2);

if(numberOfFilms<10){
    console.log('Просмотрено довольно мало фильмов');
} else if(numberOfFilms<30 && numberOfFilms >=10){
    console.log('Вы классический зритель');
} else if(numberOfFilms>=30){
    console.log('Вы киноман');
} else{
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);