/* Это объявление переменной, мы наши кнопку по тегу */
var button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	console.log('log: Выведи этот текст в консоль если кнопка нажмётся');
	alert('Не унывай Ты не дурак Ты можешь дальше Больше Сome on everybody put your hands up И запомни раз и на два три четыре То есть Навсегда')
})
