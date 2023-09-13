/*
Напишите функцию sumNumbers(), которая принимает произвольное количество чисел через запятую и возвращает их сумму.

const result1 = sumNumbers(1, 2, 3, 4, 5);
console.log(result1); // 15

const result2 = sumNumbers(10, 20, 30);
console.log(result2); // 60
*/

function sumNumbers(...num) {
	return num.reduce((sum, int) => sum + (!Number.isNaN(Number(int)) ? Number(int) : 0))
}


const result1 = sumNumbers(1, 2, 3, 4, 5);
console.log(result1); // 15

const result2 = sumNumbers(10, 20, 30);
console.log(result2); // 60
