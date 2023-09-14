/* 
Напишите код, который получает список задач по URL https://jsonplaceholder.typicode.com/todos и выводит их в виде списка (<ul>) на страницу. 

Примечание. Сетевые запросы можно выполнять с помощью функции fetch(), работающей на основе Promise API. 
*/

const tasksList = document.querySelector('#list')

let USERS = []
let TASKS = []

async function start() {
	tasksList.innerHTML = 'Loading...'
	try {
		const tasksFetch = await fetch('https://jsonplaceholder.typicode.com/todos')
		TASKS = await tasksFetch.json()

		const usersFetch = await fetch('https://jsonplaceholder.typicode.com/users')

		USERS = await usersFetch.json()
		setTimeout(() => {
			render(TASKS)
		}, 1500)
	} catch (error) {
		tasksList.innerHTML = error.message
	}
}

function render(TASKS = []) {
	if (TASKS.length === 0) {
		tasksList.innerHTML = 'Not Found'
	} else {
		tasksList.innerHTML = ''
		for (let i = 0; i < TASKS.length; i++) {
			tasksList.insertAdjacentHTML('beforeend', getTaskTemplate(TASKS[i]))
		}
	}
}

function getTaskTemplate(task) {
	return `
		<li class="list-group-item justify-content-between align-items-center ${task.completed ? "list-group-item-primary" : ""}">
		<div class="row">
				<div class="col-1">${task.id}</div>
				<div class="col-3">${getUserById(task.userId).name}</div>
				<div class="col">${task.title}</div>
				<div class="col-1">
					<button class="btn btn-small
					${task.completed ? "btn-primary" : "btn-success"}"
					data-index="${task.id}" data-type="toggle">&check;</button>
					
					<button class="btn btn-small btn-danger" data-index="${task.id}" data-type="remove">&times;</button>
				</div>
			</div>
		</li>`
}

function getUserById(userId) {
	return USERS.find(user => user.id === userId)
}

function getTaskById(taskId) {
	return TASKS.find(task => task.id === taskId)
}

tasksList.onclick = function (event) {
	if (event.target.dataset) {
		const index = Number(event.target.dataset.index)
		const type = event.target.dataset.type
		const task = getTaskById(index)

		if (type === 'toggle') {
			task.completed = !task.completed
		} else if (type === 'remove') {
			TASKS.splice(TASKS.indexOf(task), 1)
		}
		render(TASKS)
	}
}

start()