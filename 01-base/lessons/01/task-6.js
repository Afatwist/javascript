/* 
Создайте переменную a и b, присвойте им любые числа.
Если a больше b, выведите в консоль true, иначе — false.

Примечание.Нельзя использовать if...else и тернарный оператор.
*/

let a = 100
let b = 420

function compare(let1, let2) {
let result = let1 > let2
return result
}

console.log(compare(a, b))