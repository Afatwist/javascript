/* 
Создайте 2 объекта john и ann с полями name, age, pet и заполните их именем, возрастом и именем питомца соответственно.

Создайте функцию, которая в параметры принимает объект человека(john или ann), и в качестве результата выводит информацию о нем в консоль:

“Меня зовут { name }, мне { age }, у меня есть питомец { pet }”

Создайте функцию incrementAge(), которая в параметры принимает объект человека и увеличивает ему возраст на 1.

Выведите циклом все названия свойств и их значения, которые есть у объекта john.
*/

function createNewPerson(name, age, pet) {
	return {
		name: name,
		age: Number(age),
		pet: pet
	}
}

function getPersonInfo(person) {
	console.log(`Меня зовут ${person.name}, мне ${person.age}, у меня есть питомец ${person.pet}`)
}

function incrementAge(person) {
	person.age += 1
}

const john = createNewPerson('John', 30, 'Tom')

const ann = createNewPerson('Ann', 28, 'Jerry')

getPersonInfo(ann)
incrementAge(ann)
getPersonInfo(ann)

for (const key in john) {
	console.log(`${key} => ${john[key]}`)
}
