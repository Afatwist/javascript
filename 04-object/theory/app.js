const person = {
	name: 'John',
	age: 33,
	isYoutuber: true,
	lang: ['ru', 'en'],
	address: {
		city: 'City',
		street: 'Street'
	},
	'complex key': 'complex value',
	[1 + 2]: 'computed value'
}

/* for (const key in person) {
	if (person.hasOwnProperty(key)) {
		if (typeof person[key] === 'object') {
			console.log(key)
			for (const keyInner in person[key]) {
				if (person[key].hasOwnProperty(keyInner)) {
					console.log(`${keyInner} => ${person[key][keyInner]}`)
				}
			}
		} else {
			console.log(`${key} => ${person[key]}`)
		}
	}
} */

/* Object.keys(person).forEach((key) => {
	console.log(person[key])
}) */
//console.log(person)

const logger = {
	keys() {
		console.log('Object keys: ', Object.keys(this))
	},

	keysAndValues() {
		Object.keys(this).forEach((key) => {
			console.log('Key: ', key)
			console.log('Value: ', this[key])
		}) 
	}
}

logger.keys.bind(person)()
logger.keysAndValues.bind(person)()