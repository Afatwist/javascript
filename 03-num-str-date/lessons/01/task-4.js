/* 
Напишите функцию getNumberDigit(), которая принимает число(number) и индекс цифры в числе(digitPosition).Возвращает она цифру числа number, находящуюся на позиции digitPosition. 

Если происходит попытка чтения числа на позиции, которой не существует(например, кол - во цифр в числе меньше, чем передано в digitPosition), то верните undefined.

Примечание. Нельзя использовать приведение числа к строке.

function getNumberDigit(number, digitPosition) {
	// Ваш код здесь...
}

getNumberDigit(123, 0) // 1
getNumberDigit(123, 1) // 2
getNumberDigit(123, 2) // 3
getNumberDigit(1, 2) // undefined
*/

function getNumberDigit(number, digitPosition) {
	let array = [];
	number = Math.abs(number)

	while (number > 0) {
		array.unshift(number % 10);
		number = Math.trunc(number / 10)
	}

	return array[digitPosition]
}



console.log(getNumberDigit(123, 0)) // 1
console.log(getNumberDigit(123, 1)) // 2
console.log(getNumberDigit(123, 2)) // 3
console.log(getNumberDigit(1, 2)) // undefined