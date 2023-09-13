/* 
Напишите функцию getDateDifference(), которая возвращает разницу в днях между двумя датами.

const date1 = new Date('2027-06-01');
const date2 = new Date('2027-06-10');
const difference = getDateDifference(date1, date2);
console.log(difference); // 9
*/

function getDateDifference(date1, date2) {
	let diff = Math.abs(date1 - date2)
	return diff / (1000 * 60 * 60 * 24)
}

const date1 = new Date('2027-06-01')
const date2 = new Date('2027-06-10')
const difference = getDateDifference(date1, date2)
console.log(difference) // 9