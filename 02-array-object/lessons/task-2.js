/* 
Создайте функцию, которая на вход принимает массив, а на выходе возвращает сумму его элементов:

function sum(array) {
	// Ваш код здесь...
}

const arr = [1, 50, 20, 75, 90];

sum(arr); // 236

*/


function sum(array) {
	return array.reduce((acc, int) => acc + int, 0);
}

const arr = [1, 50, 20, 75, 90];

console.log(sum(arr)) // 236
