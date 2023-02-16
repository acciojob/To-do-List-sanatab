//your code here
let todoValue = document.getElementById("newTodoInput");
let btn = document.getElementById("addTodoBtn");
let list = document.getElementById("todoList");

function addTodo(){
  if(todoValue.value){

    let li = document.createElement("li");
    li.textContent = todoValue.value;
    list.appendChild(li);
    todoValue.value ="";
  }
}
btn.addEventListener('click',addTodo);
