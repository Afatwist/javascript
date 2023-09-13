/*
Напишите функцию calc(), которая принимает в параметры a и b, а также operation.В зависимости от переданной операции(+, -, /, *) возвращаем необходимый результат выражения с числами. 

function calc(a, b, operation) {
		Ваш код здесь...
	}

console.log(calc(1, 2, '+')); // 3
console.log(calc(1, 2, '-')); // -1
console.log(calc(2, 2, '*')); // 4
console.log(calc(4, 2, '/')); // 2
*/

let a = 1
let b = 2
let operation

function calc(a, b, operation) {
	let result

	switch (operation) {
		case '+':
			result = a + b
			break;

		case '-':
			result = a - b
			break;

		case '*':
			result = a * b
			break;

		case '/':
			result = b == 0 ? 'Error! divide on 0 ' : a / b
			break;

		default:
			alert('error')
			break;
	}
	return result
}

console.log(calc(1, 2, '+')); // 3
console.log(calc(1, 2, '-')); // -1
console.log(calc(2, 2, '*')); // 4
console.log(calc(4, 2, '/')); // 2