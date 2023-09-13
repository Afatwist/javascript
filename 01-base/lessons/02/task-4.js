/*
Создайте функцию, объявленную с помощью ключевого слова function, с именем sayHello().Она принимает в параметры name и возвращает строку вида: "Hello, {name}!".

Если функция была вызвана без указания name, то выведите строку "Hello, someone!".

Закомментируйте функцию и напишите аналогичную, но в виде стрелочной функции. */

let user = "John Doe"

/* function sayHello(name = 'someone') {
	return `Hello, ${name}!` 
} */

let sayHello = (name = 'someone') => `Hello, ${name}!`

console.log(sayHello(user)) // Hello, John Doe!
console.log(sayHello()) // Hello, someone!
