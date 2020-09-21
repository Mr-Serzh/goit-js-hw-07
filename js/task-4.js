// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
// значение счетчика на`1`.

// - Создай переменную`counterValue` в которой будет хранится текущее значение
// счетчика.
// - Создай функции`increment` и`decrement` для увеличения и уменьшения значения
// счетчика
//     - Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// HTML
//<div id="counter" class="task center">
//  <button type="button" data-action="decrement">
//    -1
//  </button>
//  <span id="value">0</span>
//  <button type="button" data-action="increment">
//    +1
//  </button>
//</div>

const btnDecrementEl = document.querySelector(
  "#counter button[data-action='decrement']",
);
const btnIncrementEl = document.querySelector(
  "#counter button[data-action='increment']",
);
const counterEl = document.querySelector('#counter #value');
let counterValueEl = +counterEl.textContent;

btnDecrementEl.addEventListener('click', decrementEvent);
btnIncrementEl.addEventListener('click', incrementEvent);

function decrementEvent() {
  counterValueEl -= 1;
  counterEl.textContent = counterValueEl;
}

function incrementEvent() {
  counterValueEl += 1;
  counterEl.textContent = counterValueEl;
}
