'use strict';

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    const goodFilms = arr.filter(film => {
        return film.rating >= 8;
    });
    return goodFilms;
}

function showListOfFilms(arr) {
    const result = arr.map(film => {
        return film.name;
    });
    const listOfFilms = result.reduce((sum, current) => {
        return `${sum}, ${current}`;
    });
    return listOfFilms;
}

function setFilmsIds(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].id = i + 1;
    }
    return arr;
    // let counter = 1;
    // const filmsIds = arr.map(film => {
    //     return film.id = counter;
    // });
    // return filmsIds;
}


console.log(showGoodFilms(films));
console.log(showListOfFilms(films));
console.log(setFilmsIds(films));

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    return arr.every(film => typeof(film.id) === 'number');
}

console.log(checkFilms(tranformedArray));