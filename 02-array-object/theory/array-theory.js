/* const names = ['Tom', 'Bob', 'Jane', 'Mary']
console.log(names)

names.push('Jarry') // add element to end of array
console.log(names)

names.unshift('Pluto') // add element to begin of array
console.log(names)

const nameFirst = names.shift() // remove element from begin of array and return this
console.log(names, nameFirst)

const nameLast = names.pop() // remove element from end of array and return this
console.log(names, nameLast)

console.log(names.toSorted()) */

const person = [
	{
		name: 'Tom',
		point: 10
	},
	{
		name: 'Bob',
		point: 5
	},
	{
		name: 'Jane',
		point: 105
	},
	{
		name: 'Mary',
		point: 1550
	}
]

console.log(person.sort((a, b) => b.point - a.point ))