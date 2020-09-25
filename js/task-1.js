// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в`ul#categories`, то есть
// элементов`li.item`.Получится`'В списке 3 категории.'`.

// Для каждого элемента`li.item` в списке`ul#categories`, найдет и выведет в
// консоль текст заголовка элемента(тега h2) и количество элементов в категории
// (всех вложенных в него элементов`li`).

// Например для первой категории получится:

// - Категория: Животные
// - Количество элементов: 4

const rezultBtn = document.querySelector('.js-rezult-btn');

rezultBtn.addEventListener('click', () => {
  // fo Btn
  const rezult = document.querySelector('.rezult');

  const listEl = document.querySelector('#categories');
  const listItemsEl = listEl.children;

  console.log(`В списке ${listItemsEl.length} категории`);

  // fo Btn
  const quantityCategoryEl = document.createElement('p');
  quantityCategoryEl.textContent = `В списке ${listItemsEl.length} категории`;

  // fo Btn
  rezult.appendChild(quantityCategoryEl);

  [...listItemsEl].forEach(element => {
    // fo Btn
    const categoryEl = document.createElement('p');
    categoryEl.textContent = `- Категория: ${
      element.querySelector('h2').textContent
    } - Количество элементов: ${element.querySelectorAll('li').length}`;
    // fo Btn
    rezult.appendChild(categoryEl);

    console.log(`- Категория: ${element.querySelector('h2').textContent}`);
    console.log(
      `- Количество элементов: ${element.querySelectorAll('li').length}`,
    );
  });

  // Btn of
  rezultBtn.disabled = true;
});
