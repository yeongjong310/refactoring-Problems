export function createTodoItem(text) {
  // 변수명을 더 명확하게 하기 위해 itemRow를 $todoItem으로 변수명 변경
  const $todoItem = document.createElement("li");
  $todoItem.setAttribute("class", "todo__item");

  // 변수명을 더 명확하게 하기 위해 item을 $todoItemStruct으로 변수명 변경
  const $todoItemStruct = document.createElement("div");
  $todoItemStruct.setAttribute("class", "todo__item--wrapper");

  // 변수명을 더 명확하게 하기 위해 title을 $todoItemTitle으로 변수명 변경
  const $todoItemTitle = document.createElement("span");
  $todoItemTitle.setAttribute("class", "todo__item--title");
  $todoItemTitle.textContent = text;

  // 변수명을 더 명확하게 하기 위해 deleteBtn을 $todoItemDeleteBtn으로 변수명 변경
  const $todoItemDeleteBtn = document.createElement("button");
  $todoItemDeleteBtn.setAttribute("class", "todo__item--delete-btn");
  $todoItemDeleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  $todoItemDeleteBtn.addEventListener("click", (e) => {
    const selected = e.currentTarget.closest(".todo__item");
    selected.remove();
  });

  $todoItemStruct.appendChild($todoItemDeleteBtn);

  // DOM 키워드 통일화를 위해 itemDivider를 $itemDivider로 변경
  const $itemDivider = document.createElement("div");
  $itemDivider.setAttribute("class", "todo__item--divider");

  $todoItemStruct.appendChild($todoItemTitle);
  $todoItem.appendChild($todoItemStruct);
  $todoItem.appendChild($itemDivider);

  return $todoItem;
}

const $todos = document.querySelector(".todos");
const $input = document.querySelector(".footer__input");
const $addBtn = document.querySelector(".footer__button");

// function onAdd() {
//   const text = $input.value;
//   if (text === "") {
//     $input.focus();
//     return;
//   }

//   $todos.appendChild(createTodoItem(text));

//   $input.value = "";
//   $input.focus();
// }

// $addBtn.addEventListener("click", () => {
//   onAdd();
// });

// $input.addEventListener("keypress", (event) => {
//   if (event.key === "Enter") {
//     onAdd();
//   }
// });
