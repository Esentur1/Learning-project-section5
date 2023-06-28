'use strict';

// filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter(function(name) {
    return name.length < 5;
});

console.log(shortNames);

//map

const answers = ['IvAn', 'AnnA', 'Hello'];

const result = answers.map(item => {
    return item.toLowerCase();
});

console.log(result);

//every/some

const some = [7, 4, 10];

console.log(some.some(item => typeof(item) === 'number'));
console.log(some.every(item => typeof(item) === 'number'));

//reduce

// const arr = [1, 5, 3, 8, 23, 54, 98, 3];

// const res = arr.reduce((sum, current) => {
//     return sum + current;
// });

// console.log(res);

const arr = [1, 5, 3, 8, 23, 54, 98, 'djcbds'];

const res = arr.reduce((sum, current) => {
    return `${sum}, ${current}`;
});

console.log(res);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);
