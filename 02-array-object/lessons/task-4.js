/*
Дан массив names. Необходимо сделать функцию, которая на основе этого массива генерирует строку c HTML. Она представляет из себя список элементов(<ul>), где каждый элемент списка (<li>) содержит элемент массива.

const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya'];
*/

const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya'];

function makeListHTML(array) {
	let stringHTML = '<ul>'

	array.forEach(element => {
		stringHTML += `<li> Name: ${element} </li>`
	})

	return stringHTML += '</ul>'
}

console.log(makeListHTML(names))