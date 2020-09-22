// Напиши скрипт для создания галлереи изображений по массиву данных.

// Используй массив объектов`images` для создания тегов`img` вложенных в`li`.
// Для создания разметки используй шаблонные строки и`insertAdjacentHTML()`.

// - Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// - Добавь минимальное оформление галереи флексбоксами или гридами через
// css - классы.

// HTML
// <ul id="gallery" class="list"></ul>

// массив данных
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// решение

const galleryEl = document.querySelector('#gallery');
galleryEl.insertAdjacentHTML(
  'afterbegin',
  images
    .map(element => `<li><img src="${element.url}" alt="${element.alt}"></li>`)
    .join(''),
);

galleryEl.insertAdjacentHTML('beforebegin', '<h2>Галлерея:</h2>');
galleryEl.classList.add('gallery-list');
galleryEl
  .querySelectorAll('li')
  .forEach(element => element.classList.add('image-item'));
galleryEl
  .querySelectorAll('img')
  .forEach(element => element.classList.add('image'));
