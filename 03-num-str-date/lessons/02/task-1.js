/*
Дан объект машины.

const car = {
	name: 'Hendai Solaris',
	type: 'sedan',
	maxSpeed: '320',
	color: 'red',
}

Необходимо написать написать функцию, которая принимает объект машины и возвращает строку с HTML, заполненную значениями переданного объекта. 

<article>
	<div>
		<h2>Hendai Solaris</h2>
		<span>sedan</span>
	</div>
	<div>
		<span>Maximum speed:</span>
		<span>320</span>
	</div>
	<div>
		<span>Color:</span>
		<span>red</span>
	</div>
</ article>
*/

const car = {
	name: 'Hendai Solaris',
	type: 'sedan',
	maxSpeed: '320',
	color: 'red',
}

function getTemplate(car) {
	return `
	<article>
		<div>
			<h2>${car.name}</h2>
			<span>${car.type}</span>
		</div>
		<div>
			<span>Maximum speed:</span>
			<span>${car.maxSpeed}</span>
		</div>
		<div>
			<span>Color:</span>
			<span>${car.color}</span>
		</div>
	</article>`
}

console.log(getTemplate(car))