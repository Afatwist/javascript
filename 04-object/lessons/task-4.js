/* 
1. Создайте класс Animal с полями name, favoriteFood, а также методами:

makeSound() — вывести звук животного в консоль;
sayName() — вывести имя животного в консоль;
sayInfo() — вывести любимое блюдо животного в консоль.

2. Создайте еще 2 класса, которые будут наследоваться от класса Animal — Cat, Dog. Переопределите для них метод makeSound(), чтобы он всегда возвращал соответствующий звук животного. 

3. Сделайте так, чтобы код ниже работал:

const dog = new Dog('Rex', 'Meat');
const cat = new Cat('Barsik', 'Fish');

cat.makeSound(); // Meow
dog.makeSound(); // Gav!

dog.sayName(); // My name is Rex
cat.sayName(); // My name is Barsik

dog.sayInfo(); // Rex's favorite food is Meat
cat.sayInfo(); // Barsik's favorite food is Fish
*/

class Animal {
	constructor(name, favoriteFood) {
		this.name = name
		this.favoriteFood = favoriteFood
	}

	makeSound() {
		console.log(`...`)
	}

	sayName() {
		console.log(`My name is ${this.name}`)
	}

	sayInfo() {
		console.log(`${this.name}'s favorite food is ${this.favoriteFood}`)
	}
}

class Cat extends Animal {
	constructor(name, favoriteFood) {
		super(name, favoriteFood)
	}

	makeSound() {
		console.log(`Meow`)
	}
}

class Dog extends Animal {
	constructor(name, favoriteFood) {
		super(name, favoriteFood)
	}

	makeSound() {
		console.log(`Gav!`)
	}
}

const dog = new Dog('Rex', 'Meat');
const cat = new Cat('Barsik', 'Fish');

cat.makeSound(); // Meow
dog.makeSound(); // Gav!

dog.sayName(); // My name is Rex
cat.sayName(); // My name is Barsik

dog.sayInfo(); // Rex's favorite food is Meat
cat.sayInfo(); // Barsik's favorite food is Fish