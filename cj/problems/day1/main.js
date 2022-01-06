const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }

  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');

  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  const name = document.createElement('span');
  name.setAttribute('class', 'item__name');
  name.innerText = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'item__delete');
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

  const itemDivider = document.createElement('div');
  itemDivider.setAttribute('class', 'item__divider');

  item.appendChild(name);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);

  items.appendChild(item);
  item.scrollIntoView({ block: 'center' });
  input.value = '';
  input.focus();

  deleteBtn.addEventListener('click', (e) => {
    const selected = e.currentTarget.parentNode;
    selected.remove();
  });
}

addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onAdd();
  }
});
