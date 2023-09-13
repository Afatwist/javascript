/* 
Реализуйте класс Person, который имеет поле friends (изначально пустой массив). Также он имеет методы:

addFriend() — принимает имя нового друга и добавляет его в массив friends;
showFriends() — выводит в консоль строку со всеми друзьями через запятую.
Сделайте так, чтобы код ниже работал:

const person = new Person();
person.addFriend("Иван");
person.addFriend("Сергей");
person.addFriend("Игорь");
person.showFriends(); // Иван, Сергей, Игорь
*/

class Person {
	constructor(name, age, friends = []) {
		this.name = name
		this.friends = friends
	}

	addFriend(friendName) {
		if (this.friends.includes(friendName)) {
			console.log(`Friend ${friendName} already added!`)
		} else {
			this.friends.push(friendName)
		}

	}

	removeFriend(friendName) {
		if (this.friends.includes(friendName)) {
			const index = this.friends.indexOf(friendName)
			this.friends.splice(index, 1)			
		} else {
			console.log(`Friend ${friendName} not found!`)
		}

	}

	showFriends() {
		console.log(this.friends.toString().replaceAll(',', ', '))
	}
}

const person = new Person();
person.addFriend("Иван");
person.addFriend("Сергей");
person.addFriend("Игорь");

person.showFriends(); // Иван, Сергей, Игорь