'use strict';

// function User(name, age) {
//     this.name = name;
//     this.age = age;

//     this.say = function() {
//         console.log(`Имя пользователя: ${this.name}, возраст ${this.age}`);
//     };
// }

// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function() {
//         console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
//     };

//     this.getAge = function() {
//         return userAge;
//     };

//     this.setAge = function(age) {
//         if (typeof(age) === "number" && age > 0 && age < 110) {
//             userAge = age;
//         }
//         else {
//             console.log("Недопустимое значение");
//         }
//     };
// }


// const ivan = new User('Ivan', 27);
// ivan.say();

// ivan.name = "Esentur";
// ivan.userAge = 26;
// ivan.setAge(26);

// ivan.say();

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = "Dzhayloobaev"

    say() {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
    }

    get () {
        return this.#surname;
    }

    set (age, surname) {
        if (typeof(age) === "number" && age > 0 && age < 110) {
            this._age = age;
            this.#surname = surname;
        }
        else {
            console.log("Недопустимое значение");
        }
    }
}

const ivan = new User('Ivan', 27);
ivan.age = 99;
// ivan.#surname = "dsbjs";
ivan.set(28, 'djvjbdsvj');
console.log(ivan.get());
ivan.say();
