/* 
Напишите функцию, имитирующую запрос к серверу за получением пользователя. Она принимает id и с задержкой 2500 миллисекунд возвращает пользователя из массива USERS с соответствующим id. В случае отсутствия пользователя сгенерировать обработать исключение.

const USERS = [
  { id: '001', name: "Алексей", age: 25 },
  { id: '002', name: "Иван", age: 28 },
  { id: '003', name: "Егор", age: 30 },
];

function fetchUser(id) {
  // Ваш код здесь...
}

async function start() {
  // ...
  const result = await fetchUser('001');
  console.log(result); // { id: '001', name: "Алексей", age: 25 }
  // ...
}

start();
*/

const USERS = [
	{ id: '001', name: "Алексей", age: 25 },
	{ id: '002', name: "Иван", age: 28 },
	{ id: '003', name: "Егор", age: 30 },
];

function fetchUser(id) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const user = USERS.find(user => user.id === id)
			if (user) {
				resolve(user)
			}
			reject(id)
		}, 2500)
	})
	.then(user => user)
	.catch(id => `User with id: ${id} not Found!`);
}

async function start() {
	const result = await fetchUser('0019');
	console.log(result); // { id: '001', name: "Алексей", age: 25 }

}

start();