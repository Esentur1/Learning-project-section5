'use strict';

// new RegExp('pattern', 'flags'); //Первый вариант, втречается редко

// /pattern/f //Второй вариант, встречается часто

// const ans = prompt('Введите ваше имя: ');

const reg = /n/ig;

// i - найти вне зависимости от регистра

//  g - найти сразу несколько вхождений

// m - многострочный режим



// console.log(ans.search(reg));
// console.log(ans.match(reg));

const pass = prompt('Password');

console.log(pass.replace(/./g, "*"));

const str = 'Hello, World!';
const regex = /Hello/;

/*
 Метод test() возвращает булевое значение true, если регулярное выражение сопоставляется хотя бы с одним фрагментом строки, и false, если совпадений не найдено.
*/

const result = regex.test(str);
console.log(result); // Выводит: true


