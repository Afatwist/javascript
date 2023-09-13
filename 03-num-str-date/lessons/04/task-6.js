/* 
Напишите функцию, которая возвращает последнее число месяца.

// июнь 2027
console.log(getLastDayOfMonth(2027, 5)); // 30

// февраль 2027
console.log(getLastDayOfMonth(2027, 1)); // 28

// январь 2027
console.log(getLastDayOfMonth(2027, 0)); // 31
*/
function getLastDayOfMonth(year, month) {
	let monthIndex = month + 1 <= 11 ? month + 1 : 0
	let yearIndex = monthIndex === 0 && month != 0 ? year + 1 : year

	const now = new Date(year, month, 1)
	const milliseconds = new Date(yearIndex, monthIndex, 1) - now

	return Math.trunc(milliseconds / (1000 * 60 * 60 * 24))
}

// июнь 2027
console.log(getLastDayOfMonth(2027, 5)); // 30

// февраль 2027
console.log(getLastDayOfMonth(2027, 1)); // 28

// январь 2027
console.log(getLastDayOfMonth(2027, 0)); // 31

// декабрь 2027
console.log(getLastDayOfMonth(2027, 11)); // 31