import { createTodoItem } from "./createTodoItem";

const $todos = document.querySelector(".todos");
const $input = document.querySelector(".footer__input");
const $addBtn = document.querySelector(".footer__button");

function onAdd() {
  const text = $input.value;
  if (text === "") {
    $input.focus();
    return;
  }

  $todos.appendChild(createTodoItem(text));

  $input.value = "";
  $input.focus();
}

// TODO jest 통과하도록 수정하기.
// TODO jest 설정방법 블로그에 문서화 하기.
$addBtn.addEventListener("click", () => {
  onAdd();
});

$input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    onAdd();
  }
});
