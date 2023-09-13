/* Main Const */
const userList = document.querySelector('#list')
const filter = document.querySelector('#filter')
const userCard = document.querySelector('#user-card')

let USERS = []

async function start() {
	userList.innerHTML = 'Loading...'

	try {
		const resp = await fetch('https://jsonplaceholder.typicode.com/users')
		const data = await resp.json()
		setTimeout(() => {
			USERS = data
			render(USERS)
		}, 1000)
	} catch (error) {
		userList.innerHTML = error.message
	}
}

/* User List html */
function render(users = []) {
	if (users.length == 0) {
		userList.innerHTML = 'No matched'
	} else {
		userList.innerHTML = `
		<li class="list-group-item d-flex justify-content-between
		align-items-center">
			<span class="fw-bolder">User Name</span>
			<div class="d-grid gap-2 d-md-flex justify-content-md-end">
				<span class="fw-bolder">Actions</span>
			</div>
		</li>` + users.map(LiElementHTML).join('')
	}
}

function LiElementHTML(user) {
	return `
	<li class="list-group-item d-flex justify-content-between
		align-items-center" id="${user.id}">
			<span>${user.name}</span>
			<div class="d-grid gap-2 d-md-flex justify-content-md-end">

				<button class="btn btn-primary" data-type="info" data-index="${user.id}">Show</button>
				
				<button class="btn btn-success" data-type="edit" data-index="${user.id}">Edit</button>
				
				<button class="btn btn-danger" data-type="delete" data-index="${user.id}">Delete</button>
			</div>
	</li>`
}

function LiElementClassChanger(userId = false, action = '') {
	const elements = userList.getElementsByClassName('list-group-item')

	const classRemover = (element) => {
		element.classList.remove('list-group-item-dark')
		element.classList.remove('list-group-item-info')
		element.classList.remove('list-group-item-success')
		element.classList.remove('list-group-item-danger')
	}

	for (const element of elements) {
		if (element.classList.length > 4) {
			classRemover(element)
			element.classList.add('list-group-item-dark')
		}
	}

	if (userId && action === 'info') {
		const element = userList.querySelector(`[id='${userId}']`)
		classRemover(element)
		element.classList.add('list-group-item-info')
	}


	if (userId && action === 'edit') {
		const element = userList.querySelector(`[id='${userId}']`)
		classRemover(element)
		element.classList.add('list-group-item-success')
	}

	if (userId && action === 'delete') {
		const element = userList.querySelector(`[id='${userId}']`)
		classRemover(element)
		element.classList.add('list-group-item-danger')
	}
}

/* Helpers */
function actionSwitch(typeAction, index) {
	const user = getUserById(index)

	if (typeAction === 'info') {
		LiElementClassChanger(user.id, 'info')
		userCard.innerHTML = userInfoHtml(user)

	} else if (typeAction === 'edit') {
		LiElementClassChanger(user.id, 'edit')
		userCard.innerHTML = userEditHtml(user)

	} else if (typeAction === 'delete') {
		LiElementClassChanger(user.id, 'delete')
		userCard.innerHTML = userDeleteHtml(user)

	} else {
		alert('Error Action!')
	}
}

function getUserById(id) {
	return USERS.find((user) => {
		if (user.id === id) return user
	})
}

/* User Card html */
function userInfoHtml(user) {
	return `
		<div class="card" style="width: 18rem; z-index: 1000">
			<div class="card-body">
				<h5 class="card-title">${user.name}</h5>
				
				<h6 class="card-subtitle mb-2 text-muted">Username: ${user.username}</h6>
				<span class="card-text">E-mail: ${user.email}</span><br/>
				<span class="card-text">Phone: ${user.phone}</span><br/>
				<span class="card-text">Website: ${user.website}</span>
				<hr />
				<p class="card-text">
					<h6 class="card-subtitle mb-2 text-muted">Address</h6>
					<span class="card-text">City: ${user.address.city}</span><br/>
					<span class="card-text">Suite: ${user.address.suite}</span><br/>
					<span class="card-text">Street: ${user.address.street}</span><br/>
					<span class="card-text">Zipcode: ${user.address.zipcode}</span>
				</p>
				<hr />
				<p class="card-text">
					<h6 class="card-subtitle mb-2 text-muted">Company</h6>
					<span class="card-text">Name: ${user.company.name}</span><br/>
					<span class="card-text">CatchPhrase: ${user.company.catchPhrase}</span><br/>
					<span class="card-text">BS: ${user.company.bs}</span>
				</p>
				<hr />
				<button class="btn btn-warning" data-action='hide-card'>
				Hide card</button>
			</div>
		</div>`
}

function userEditHtml(user) {
	return `	
		<div class="mb-3">
			<label for="name" class="form-label">Name</label>
			<input type="text" class="form-control" id="name" name ="name" placeholder="Name" value="${user.name}">
		</div>
		<div class="mb-3">
			<label for="email" class="form-label">Email</label>
			<input type="email" class="form-control" id="email" placeholder="email" value="${user.email}">
		</div>
		<button class="btn btn-success" data-id="${user.id}" data-action='user-edit'>Submit</button>
		<button class="btn btn-warning" data-action='hide-card'>
		Hide card</button>	
`
}

function userDeleteHtml(user) {
	return `
	<div>
		<p>Delete User: <b>${user.name}</b> ?</p>

		<button type="button" class="btn btn-danger"
		data-action="user-delete" data-confirmation="yes"
		data-id="${user.id}">yes</button>

		<button type="button" class="btn btn-primary" data-action="user-delete" data-confirmation="no"
		data-id="${user.id}">no</button>
	</div>`
}

/* Action and filter */
userCard.onclick = (event) => {
	const action = event.target.dataset.action

	if (action === 'hide-card') {
		userCard.innerHTML = ''
		LiElementClassChanger()
	}

	if (action === 'user-edit') {
		const id = Number(event.target.dataset.id)
		const name = document.getElementById('name').value
		const email = document.getElementById('email').value

		USERS.find((user) => {
			if (user.id === id) {
				user.name = name
				user.email = email
			}
		})
		render(USERS)
		LiElementClassChanger()
	}

	if (action === 'user-delete') {
		const id = Number(event.target.dataset.id)
		const confirmation = event.target.dataset.confirmation

		userCard.innerHTML = ''

		if (confirmation === 'yes') {
			if (confirm("Are You Sure?")) {
				const index = USERS.indexOf(getUserById(id))
				USERS.splice(index, 1)
				render(USERS)
			}
		}
		LiElementClassChanger()
	}
}

userList.onclick = (event) => {
	if (Object.keys(event.target.dataset).length > 0) {
		const type = event.target.dataset.type
		const index = Number(event.target.dataset.index)
		actionSwitch(type, index)
	}
}

filter.addEventListener('input', (event) => {
	const value = event.target.value.toLowerCase()
	const filteredUsers = USERS.filter((user) => {
		return user.name.toLowerCase().includes(value)
	})
	render(filteredUsers)
})

start()