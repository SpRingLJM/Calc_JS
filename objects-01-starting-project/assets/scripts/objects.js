const movieList = document.getElementById('movie-list');

movieList.style['background-color'] = 'red';
movieList.style.display = 'block';

const userChosenKeyName = 'level';
const person = {
    'first name': 'Max',
    hobbies: ['Sports', 'Cooking'],
    [userChosenKeyName]: '...',
    greet: function(){
        alert('Hi there!');
    }
};

person.age = 31;
person.isAdmin = true;

delete person.age;

console.log(person['first name']);