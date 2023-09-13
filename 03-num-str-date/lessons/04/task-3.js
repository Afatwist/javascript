/* 
Напишите функцию getTimeUntilDate(date), которая возвращает объект с информацией о том, сколько времени осталось от текущей даты до переданной. 

const targetDate = new Date('2027-12-31T23:59:59');
const timeUntilTargetDate = getTimeUntilDate(targetDate);
console.log(timeUntilTargetDate);
// { days: 100, hours: 20, minutes: 45, seconds: 31 }
*/

function getTimeUntilDate(date) {
	const daysMultiplier = 1000 * 60 * 60 * 24
	const hoursMultiplier = 1000 * 60 * 60
	const minutesMultiplier = 1000 * 60

	let diff = date - new Date
	const days = Math.trunc(diff / daysMultiplier)

	diff -= days * daysMultiplier
	const hours = Math.trunc(diff / hoursMultiplier)

	diff -= hours * hoursMultiplier
	const minutes = Math.trunc(diff / minutesMultiplier)

	diff -= minutes * minutesMultiplier
	const seconds = Math.trunc(diff / 1000)

	return {
		days,
		hours,
		minutes,
		seconds,
	}
}

const targetDate = new Date('2027-12-31T23:59:59');
const timeUntilTargetDate = getTimeUntilDate(targetDate);

console.log(timeUntilTargetDate);
// { days: 100, hours: 20, minutes: 45, seconds: 31 }