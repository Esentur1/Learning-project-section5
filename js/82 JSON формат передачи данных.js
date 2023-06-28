'use strict';

const person = {
    name: 'Alex',
    tl: '+79841233946',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

// console.log(JSON.stringify(person));
// console.log(JSON.parse(JSON.stringify(person)));

const clone = JSON.parse(JSON.stringify(person));

person.parents.mom = "Ann";

console.log(person);
console.log(clone);