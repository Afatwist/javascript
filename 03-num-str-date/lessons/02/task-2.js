/*
Необходимо написать функцию countWords(), которая принимает предложение и подсчитывает количество слов в нем.

const sentence = "Hello, how are you?";
console.log(countWords(sentence)); // 4
*/

function countWords(string) {
	let array = string.split(' ')
	return array.length
}

const sentence = "Hello, how are you?";
console.log(countWords(sentence)); // 4
