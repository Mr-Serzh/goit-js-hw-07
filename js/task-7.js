// Напиши скрипт, который реагирует на изменение значения`input#font-size-control`
//(событие input) и изменяет инлайн - стиль`span#text` обновляя свойство
//`font-size`.В результате при перетаскивании ползунка будет меняться размер текста.

// HTML
// <input id="font-size-control" type="range"/>
// <br/>
// <span id="text">Абракадабра!</span>

const resizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

resizeEl.oninput = function () {
  textEl.setAttribute(
    'style',
    `font-size: ${resizeEl.value / 4}px; color: #e5e110;`,
  );
};
