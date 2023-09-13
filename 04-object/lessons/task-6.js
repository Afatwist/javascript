/* 
Дан следующий фрагмент кода:

const boxFactory = {
	type: 'box',
	count: 0,
	produce: () => {
		this.count++;
		return 'Box №' + this.count;
	}
}

const produceBox = (produceFn) => {
	const boxName = produceFn();
	console.log(boxName);
}

for(let i = 0; i < 25; i++) {
	produceBox(boxFactory.produce);
}
Отредактируйте код так, чтобы при его работе выводились корректные номера коробок. Функцию produceBox() править нельзя. 
*/
const boxFactory = {
	type: 'box',
	count: 0,
	produce: function () {
		return () => {
			this.count++
			return 'Box №' + this.count
		}
	},
}

const produceBox = (produceFn) => {
	const boxName = produceFn();
	console.log(boxName);
}

for (let i = 0; i < 25; i++) {
	produceBox(boxFactory.produce());
}