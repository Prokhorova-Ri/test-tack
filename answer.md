Вопрос 1.

var xxx = 4;

function test1() {
    return(xxx === 4 && 'Cool');
}

function test2() {
    return(xxx === 4 || 'Cool');
}

Что вернут функции test1 и test2 при их выполнении?

Ответ: 

test1() - вовзращает cool

test2() - true

Вопрос 2.

Для чего используется метод preventDefault объекта события при работе с DOM
(event.preventDefault())?

event.preventDefault() - сбрасывает стандартное поведение событий, если это события не кастомные.

Пример 1:

К примеру у нас есть форма с input и кнопкой "Отправить". При нажатии на кнопку нам нужно, что бы данные отправлялись на бэкенд по api.
Стандартное поведение при форме страница будет перезагружать нам страницу.

Решение: При нажатии на кнопку первым делом сделать сброс с помощью event.preventDefault() 

const btn = document.querySelector('.btn')

btn.addEventListener('click', (e) => testBtn(e))

const testBtn = (event) => {

event.preventDefault()

...пишем дальше код

}

Пример 2:

Мы хотим при клике на ссылку click-button добавлять элементу с классом content класс show.

Решение:

const button = document.querySelector('.click-button');

const popup = document.querySelector('.content');

button.onclick = function (evt) {

evt.preventDefault();

popup.classList.add('show');

};

Если мы уберём строку evt.preventDefault(), вместо попапа откроется отдельная страница pop-up.html, адрес которой прописан в атрибуте href у ссылки. 


    
