/*
Создайте массив со значениями[1, 10, 15, -100, -23, 19, 15032].
Получите из него новый массив, в котором каждый элемент будет увеличен на 25 %.
Выведите оба массива в консоль. 
*/

let array = [1, 10, 15, -100, -23, 19, 15032]
let newArray = []

array.forEach(element => {
	if (element >= 0) {
		newArray.push(element *= 1.25)
	} else {
		newArray.push(element *= 0.75)
	}
})
console.log(array, newArray)