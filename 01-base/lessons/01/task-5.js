/* 
Выведите в консоль следующие выражения:
*/

console.log(10 == 10) // true - 10 равно 10
console.log(10 != 10) // false 
console.log(12 == 'Привет') // false - сравнение числа и строки
console.log(10 < 11) // true 10 меньше 11
console.log(12 > 20) // false 12 меньше 20
console.log(true && true) // true - && - логическое "И" возвращает true если все выражения true
console.log(true && false) // false - одно из выражений не true
console.log(false && true) // false - одно из выражений не true
console.log(false || true) // true - || - логическое "ИЛИ" возвращает true если хотя бы одно из выражений true
console.log(true || false) // true 
console.log(true || true) // true 
console.log(10 <= 10) // true 10 больше или равно 10
console.log(18 <= 20) // true 18 меньше или равно 20
console.log(50 >= 50) // true
console.log(51 >= 50) // true
console.log({ } === {}) // false сравнение неопределенных объектов
console.log({ } == {}) // false

/* 
Сравнение по ссылке:
*/

const a = {} // константе a присвоено значение объекта
const b = a // константе b присвоено значение константы a
console.log(a === b) // true константы одинаковы по значению и по типу