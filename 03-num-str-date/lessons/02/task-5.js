/*
Реализуйте функцию countVowels(), которая подсчитывает количество гласных букв(латинских и кириллических) в переданной строке.

const str = "Hello, Привет!";
console.log(countVowels(str)); // 4
*/

function countVowels(str) {
	const arrayVowels = [
		'a', 'e', 'i', 'o', 'u', 'y', // eng
		'а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я' // rus
	]

	const array = str.toLowerCase().split('')

	let count = 0

	array.forEach(letter => {
		if (arrayVowels.includes(letter)) count += 1
	})

	return count
}

const str = "Hello, Привет!"
console.log(countVowels(str)) // 4