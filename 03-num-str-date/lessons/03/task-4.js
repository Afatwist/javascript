/*
Напишите функцию isPalindrome(), которая принимает строку и возвращает true, если она является палиндромом, иначе — false. 

Примечание. Палиндром — строка, которая читается одинаково слева направо и справа налево. 

console.log(isPalindrome('level')); // true
console.log(isPalindrome('radar')); // true
console.log(isPalindrome('hello')); // false
*/

function isPalindrome(string) {
	if (typeof string != 'string') return false

	let word = string.toLowerCase()

	let array = word.split('')
	let arrayRevers = array.reverse()

	let wordRevers = arrayRevers.toString().replaceAll(',', '')

	return wordRevers === word
}

console.log(isPalindrome('level')); // true
console.log(isPalindrome('radar')); // true
console.log(isPalindrome('hello')); // false