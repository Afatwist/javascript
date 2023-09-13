/* 
Напишите функцию isWeekends(), которая проверяет, является ли указанная дата выходным днем. 

const date1 = new Date('2027-07-10');  // Суббота
const date2 = new Date('2027-07-12');  // Понедельник

console.log(isWeekend(date1));  // true
console.log(isWeekend(date2));  // false
*/
function isWeekends(date) {
	const dayIndex = date.getUTCDay()

	return dayIndex === 0 || dayIndex === 6 ? true : false
}

const date1 = new Date('2027-07-10');  // Суббота
const date2 = new Date('2027-07-12');  // Понедельник

console.log(isWeekends(date1));  // true
console.log(isWeekends(date2));  // false