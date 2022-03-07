"use sctrict";

const personalMovieDB = {
    count: {},
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while(this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMyFilms() {
        for (let i = 0; i < 2; i++){
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько его оцените?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },

    detectPersonalLevel(){
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },

    writeYoutGenres(){
        for (let i = 1; i <= 3; i++) {
        const genre = prompt('Ваш любимый жанр под номером ' + i, '');
    
        if (genre != null && genre != '' && genre.length < 50) {
            personalMovieDB.genres[i-1] = genre;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },

    showMyDB (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB() {
        if (this.privat === false) {
            this.privat = true;
        } else { this.privat = false;}
    }
};

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.writeYoutGenres();

personalMovieDB.showMyDB(personalMovieDB.privat);



