'use strict';

const list = document.querySelector('.main__list');
const form = document.querySelector('.footer__form');
const input = document.querySelector('.form__input');

let id = 0;

function addItem(text) {
  const li = document.createElement('li');
  li.setAttribute('class', 'list__item');
  li.setAttribute('data-id', id);
  li.innerHTML = `
    <span>${text}</span>
    <i class="fas fa-trash-alt" data-id=${id}></i>
  `;
  id++;
  return li;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value;
  if (text === '') {
    return;
  }
  const item = addItem(text);

  input.value = '';
  input.focus();
  list.appendChild(item);
});

list.addEventListener('click', (e) => {
  const targetId = e.target.dataset.id;
  if (targetId) {
    const target = document.querySelector(`.list__item[data-id="${targetId}"]`);
    target.remove();
  }
});
