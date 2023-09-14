/* 
Определите порядок вывода в следующем фрагменте кода без его запуска. 

console.log('a');
new Promise((resolve, reject) => {
	console.log('b');
	setTimeout(() => {
		console.log('c');
		resolve();
	}, 0);
})
  .then(() => console.log('d'));

console.log('e');
setTimeout(() => console.log('f'), 0);
console.log('g');
Определите для себя, почему вывод произошел именно в таком порядке.
*/

console.log('a'); // первая, т.к. первая по ходу скрипта

new Promise((resolve, reject) => {
	console.log('b'); // вторая, т.к выполняется при создании промиса 
	
	setTimeout(() => {
		console.log('c'); // пятая, выполнится с задержкой, т.к отправлена в очередь до выполнения условия промиса
		resolve();
	}, 0);
})
	.then(() => console.log('d')); // шестая, выполнится после срабатывания промиса

console.log('e'); // третья, т.к предыдущие буквы в очереди

setTimeout(() => console.log('f'), 0); // седьмая, выполнится с задержкой, т.к отправлена в очередь после промиса

console.log('g'); // четвертая