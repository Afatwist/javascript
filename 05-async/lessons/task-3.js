/*
Напишите функцию sumWithDelay(), которая принимает delay, a, b и возвращает a + b через delay миллисекунд.Функция должна работать на основе Promise API.

function sumWithDelay() {
	// Ваш код здесь...
}

async function start() {
	const result = await sumWithDelay(1000, 5, 5);
	console.log(result);
}

start();
*/

function sumWithDelay(delay, a, b) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(a + b);
		}, delay);
	})

}

async function start() {
	const result = await sumWithDelay(1000, 5, 5);
	console.log(result);
}

start();