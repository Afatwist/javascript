/*
Необходимо написать функцию getInitials(), которая принимает полное имя в виде строки(например, “John Doe”) и возвращает инициалы в формате “J.D.”.

const fullName = "John Doe";
const initials = getInitials(fullName);
console.log(initials); // "J. D."
*/

function getInitials(fullName) {
	let array = fullName.split(' ')
	let initials = ''

	array.forEach(element => {
		initials += element.charAt(0) + '. '
	});

	return initials
}

const fullName = "John Doe";
const initials = getInitials(fullName);
console.log(initials); // "J. D."