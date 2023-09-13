/* Напишите функцию calculateAge(), которая принимает день рождения и возвращает количество лет.

const birthDate = new Date('1990-05-20');
const age = calculateAge(birthDate);

console.log(age); */

function calculateAge(date) {
	const now = new Date
	let diff = (now - date) / (1000 * 60 * 60 * 24 * 365)	
	return Math.trunc(diff)
}

const birthDate = new Date('1990-05-20')
const age = calculateAge(birthDate)

console.log(age) // 33