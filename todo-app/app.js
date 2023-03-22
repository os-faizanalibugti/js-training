const todos = ["Work", "Play"];

const todoList = document.querySelector(".todo");
const todoForm = document.querySelector(".form");
const todoInput = document.querySelector("#todo");

renderTodo();

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  todos.push(todoInput.value);
  renderTodo();
});

function renderTodo() {
  todos.forEach((todo) => {
    const listItem = document.createElement("li");
    listItem.innerText = todo;
    todoList.appendChild(listItem);
  });
}
