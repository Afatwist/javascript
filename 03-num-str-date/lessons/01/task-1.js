/*
Реализуйте функцию isPrimeNumber(), которая принимает число и возвращает true, если оно простое, иначе — false.

Примечание. Простые числа — это числа, которые больше 1 и не имеют делителей, кроме 1 и самого себя.
*/

function isPrimeNumber(num) {
	if (!Number.isInteger(num)) return false

	if (num != 2 && num % 2 == 0) return false

	const limit = Math.ceil(num / 2)

	for (let index = 3; index <= limit; index += 2) {
		if (num % index == 0) {
			console.log(index)
			return false
		}
	}

	return true
}

console.log(isPrimeNumber(13))