// Напиши скрипт который, при наборе текста в инпуте`input#name-input`(событие
// input), подставляет его текущее значение в`span#name-output`.Если инпут
// пустой, в спане должна отображаться строка`'незнакомец'`.

// HTML
// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', inputName);

function inputName() {
  outputEl.textContent = inputEl.value === '' ? 'незнакомец' : inputEl.value;
}
