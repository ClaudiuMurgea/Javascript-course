console.log(localStorage.getItem('todoList'));
const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];;

renderTodoList();
function renderTodoList() {
  let toDoListHtml = '';

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
      <div> ${name} </div>
      <div> ${dueDate} </div>
      <div>
        <button class="delete-todo-button js-delete-item-button"> Delete </button>
      </div>`;
      toDoListHtml += html;
  });

  document.querySelector('.js-todo-list').innerHTML = toDoListHtml;

  document.querySelectorAll('.js-delete-item-button')
  .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
  });
}
document.querySelector('.js-add-todo-button').addEventListener('click', () => { 
  addTodo();
});

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const dateInputElement = document.querySelector('.js-due-date-input'); 

  const name = inputElement.value;
  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name,
    // dueDate: dueDate
    name,
    dueDate
  });
  inputElement.value = '';
  dateInputElement.value = '';
  renderTodoList();
  localStorage.setItem('todoList', JSON.stringify(todoList));
}