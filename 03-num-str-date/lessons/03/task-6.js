/* 
Создайте функцию createCounter(), которая принимает начальное значение и возвращает три функции:

inc() — увеличивает значение на 1;
dec() — уменьшает значение на 1;
get() — возвращает текущее значение.
Пример использования функции:

function createCounter(value) {
	// Ваш код здесь...
}

const { inc, dec, get } = createCounter(5);
console.log(get()); // 5
inc();
inc();
inc();
dec();
console.log(get()); // 7
*/

function createCounter(value) {
	if (Number.isNaN(Number(value))) return Nan
	
	function inc() {
		value += 1
	}

	function dec() {
		value -= 1
	}

	function get() {
		return value
	}
	return { inc, dec, get }
}

const { inc, dec, get } = createCounter(5)
console.log(get()) // 5
inc()
inc()
inc()
dec()
console.log(get()) // 7