/*
Необходимо написать функцию generateGoogleString(), которая принимает число и возвращает сроку ”Google” с указанным количеством букв “o”. При этом минимальное количество букв “о” равно 2.

console.log(generateGoogleString(4)) // Goooogle

console.log(generateGoogleString(0)) // Google

console.log(generateGoogleString(-2)) // Google
*/

function generateGoogleString(num) {
	num = num > 2 ? num : 2
	return 'G' + 'o'.repeat(num) + 'gle'
}

console.log(generateGoogleString(4)) // Goooogle

console.log(generateGoogleString(0)) // Google

console.log(generateGoogleString(-2)) // Google