const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')
const millisecondsBtn = document.getElementById('milliseconds')

let mode = 'time'
let interval = 1000

update()

setTimeout(() => { update() }, interval);

function update() {
	interval = formatOutput(mode).interval ? formatOutput(mode).interval : interval	

	setTimeout(() => { update() }, interval)

	return output.textContent = formatOutput(mode).output
}

function formatOutput(formatMode) {
	const now = new Date()

	switch (formatMode) {
		case 'time':
			return {
				output: `Время: ${now.toLocaleTimeString()}`,
				interval: 1000
			}
		case 'date':
			return {
				output: `Дата: ${now.toLocaleDateString()}`,
				interval: 500000
			}
		case 'full':
			return {
				output: `
				Дата: ${now.toLocaleDateString()} 
				Время: ${now.toLocaleTimeString()}`,
				interval: 1000
			}
		case 'milliseconds':
			return {
				output: `
				Время: ${now.toLocaleTimeString()}
				Миллисекунды: ${now.getMilliseconds()}`,
				interval: 10
			}
		default:
			return {
				output: `Время: ${now.toLocaleTimeString()}`,
				interval: 1000
			}
	}
}

function bindMode(nameMode) {
	return function () {
		mode = nameMode
		update()
	}
}

fullBtn.onclick = bindMode('full')
dateBtn.onclick = bindMode('date')
timeBtn.onclick = bindMode('time')
millisecondsBtn.onclick = bindMode('milliseconds')