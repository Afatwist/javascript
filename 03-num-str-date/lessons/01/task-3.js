/* 
Создайте функцию isPerfectNumber(), которая принимает целое положительное число в параметры и возвращает true, если число является совершенным, и false в противном случае.

Примечание. Совершенное число — это число, равное сумме всех своих положительных делителей (за исключением самого числа).Например, число 6 является совершенным, потому что делители числа 6 (1, 2, 3) в сумме дают 6.

function isPerfectNumber(number) {
	// Ваш код здесь...
}

console.log(isPerfectNumber(6));   // true
console.log(isPerfectNumber(28));  // true
console.log(isPerfectNumber(12));  // false
console.log(isPerfectNumber(16));  // false
*/

function isPerfectNumber(number) {
	if (number < 0 || !Number.isInteger(number)) return false

	let dividers = [1]

	for (let index = 2; index < number; index++) {
		if (number % index == 0) {
			dividers.push(index)
		}
	}

	let sum = dividers.reduce((sum, divider) => sum + divider)

	return number === sum ? true : false
}

console.log(isPerfectNumber(6));   // true
console.log(isPerfectNumber(28));  // true
console.log(isPerfectNumber(12));  // false
console.log(isPerfectNumber(16));  // false

console.log(isPerfectNumber(6.1));  // false