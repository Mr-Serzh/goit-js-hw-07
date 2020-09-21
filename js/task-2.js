// Напиши скрипт, который для каждого элемента массива`ingredients` создаст
// отдельный`li`, после чего вставит все`li` за одну операцию в список
//     `ul.ingredients`.Для создания DOM - узлов используй`document.createElement()`.

// HTML
//<ul id="ingredients" class="list"></ul>

//  массив строк
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// решение

const listEl = document.querySelector('#ingredients');

const element = ingredients.map(element => {
  const item = document.createElement('li');
  item.textContent = element;
  return item;
});

listEl.append(...element);
