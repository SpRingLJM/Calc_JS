const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list');

    if(movies.length === 0){
        movieList.classList.remove('visible');
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
        let text = movie.getFormattedTitle() + ' - ';
        for(const key in info){
            if(key !== 'title'){
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
    // ?—¬ê¸°ì„œ value?Š” ?•´?‹¹ ?ž…? ¥ DOM ?…¸?“œ?— ?•¡?„¸?Š¤?•´?„œ
    // ?‚¬?š©?žê°? ?ž…? ¥?•œ ?‚´?š©?˜ value ?”„ë¡œí¼?‹°ë§? ì·¨í•˜?Š” ê²?
    if (title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {
        return;
    }

    const newMovie = {
        info:{
            title,
            [extraName]: extraValue
        },
        id: Math.random().toString(),
        getFormattedTitle: function(){ // important: Don't use an arrow function
            return this.info.title.toUpperCase();
        }
    };

    movies.push(newMovie);
    renderMovies();
};

const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);