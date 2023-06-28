'use strict';

// localStorage.setItem('number', 5);

// localStorage.removeItem('number');

// localStorage.clear();
// console.log(localStorage.getItem('number'));

const divRedBox = document.querySelector('.red-box');

if (localStorage.getItem('color') != null) {
    divRedBox.style.backgroundColor = localStorage.getItem('color');
}

divRedBox.addEventListener('click', () => {
    divRedBox.style.backgroundColor = 'blue';
    localStorage.setItem('color', 'blue');
});



