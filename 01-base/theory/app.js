const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')

const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplicationBtn = document.getElementById('multiplication')
const divisionBtn = document.getElementById('division')

const submitBtn = document.getElementById('submit')

const resultElement = document.getElementById('result')

let action = '+'

plusBtn.onclick = function () {
	action = '+'
}

minusBtn.onclick = function () {
	action = '-'
}

multiplicationBtn.onclick = function () {
	action = '*'
}

divisionBtn.onclick = function () {
	action = '/'
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
	const num1 = Number(inp1.value)
	const num2 = Number(inp2.value)
	let result

	switch (actionSymbol) {
		case '+':
			result = num1 + num2
			break;

		case '-':
			result = num1 - num2
			break;

		case '*':
			result = num1 * num2
			break;

		case '/':
			result = num2 == 0 ? 'Error! divide on 0 ' : num1 / num2
			break;

		default:
			alert('error')
			break;
	}
	return result
}

function printResult(result) {
	if (result < 0) {
		resultElement.style.color = 'red'
	} else {
		resultElement.style.color = 'green'
	}
	resultElement.textContent = result
}

submitBtn.onclick = function () {

	let result = computeNumbersWithAction(input1, input2, action)
	printResult(result)
}
