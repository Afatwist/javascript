/* 
Напишите функцию, которая проверяет, является ли год високосным. Возвращает true, если да, иначе — false. 

console.log(isLeapYear(2023)); // false
console.log(isLeapYear(2024)); // true
*/

function isLeapYear(year) {
	const now = new Date(year, 0, 1)
	const milliseconds = new Date(year, 11, 31) - now
	const days = Math.trunc(milliseconds / (1000 * 60 * 60 * 24))

	return days === 365 ? true : false
}

console.log(isLeapYear(2023)); // false
console.log(isLeapYear(2024)); // true
