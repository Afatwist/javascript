/*
Создайте класс Circle, который имеет поле radius, а также метод getArea(), высчитывающий площадь круга и округляющий её до двух знаков после запятой. 

Сделайте так, чтобы код ниже работал:

const circle = new Circle(5);
console.log(circle.getArea()); // "78.54"
*/

class Circle {
	constructor(radius) {
		this.radius = radius
	}

	getArea() {
		return (Math.PI * Math.pow(this.radius, 2)).toFixed(2)
	}

	getPerimeter() {
		return (2 * Math.PI * this.radius).toFixed(2)
	}

	changeRadius(newRadius) {
		this.radius = newRadius
	}
}

const circle = new Circle(5)
console.log(circle.getArea(), circle.getPerimeter()) // 78.54 31.42

circle.changeRadius(10)
console.log(circle.getArea(), circle.getPerimeter()) // 314.16 62.83