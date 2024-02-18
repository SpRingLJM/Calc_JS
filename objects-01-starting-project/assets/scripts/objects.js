"use strict";
const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list');

    if(movies.length === 0){
        movieList.classList.remove('visible');
        return;
    } else{
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';
    
    const filteredMovies = !filter 
        ? movies
         : movies.filter(movie => movie.info.title.includes(filter));

    filteredMovies.forEach((movie) => {
        const movieEl = document.createElement('li');
        const { info, ...otherProps } = movie;
        console.log(otherProps);
        // const { title: movieTitle } = info;
        // const {getFormattedTitle} = movie;
        let { getFormattedTitle } = movie;
        // getFormattedTitle = getFormattedTitle.bind(movie);
        let text = getFormattedTitle.apply(movie) + ' - ';
        for(const key in info){
            if(key !== 'title' && key !== '_title'){
                text = text + `${key}: ${info[key]}`;
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    });
};

const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;
    // ?��기서 value?�� ?��?�� ?��?�� DOM ?��?��?�� ?��?��?��?��?��
    // ?��?��?���? ?��?��?�� ?��?��?�� value ?��로퍼?���? 취하?�� �?
    if (title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {
        return;
    }
    // Both 'setter(set)' and 'getter(get)' are used, or both are not used.
    const newMovie = {
        info:{
            set title(val) {
                if(val.trim() === ''){
                    this._title = 'DEFAULT';
                    return;
                }
                this._title = val;
            },
            get title() {
                return this._title.toUpperCase();
            },
            [extraName]: extraValue
        },
        id: Math.random().toString(),
        getFormattedTitle() { // important: Don't use an arrow function
            console.log(this);
            return this.info.title.toUpperCase();
        }
    };

    newMovie.info.title = title;
    console.log(newMovie.info.title);

    movies.push(newMovie);
    renderMovies();
};

const searchMovieHandler = () => {
    console.log(this);
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);