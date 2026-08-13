const Todolist= [{
    name:'make dinner',
     dueDate: '2024-06-30'
    }];
renderTodoList();
function renderTodoList(){
    let TodoHTML = '';
for(let i=0; i<Todolist.length; i++){
    const todoObject= Todolist[i];
   // const name = todoObject.name;
   // const dueDate = todoObject.dueDate;
    const {name, dueDate} = todoObject;
    
    const html =`<div>${name}</div><div>${dueDate}</div>
    <button onclick="Todolist.splice(${i}, 1);renderTodoList(); " class="delete-todo">Delete</button>`;
    TodoHTML += html;
}

console.log(TodoHTML);
document.querySelector('.js-todo-container').innerHTML = TodoHTML;
}
const todo = () => {
    
    const inputElement = document.querySelector('.js-input');
    const name = inputElement.value;
 const dateElement = document.querySelector('.js-dueDate-input');
 const dueDate = dateElement.value;
    Todolist.push({name, dueDate});
    console.log(Todolist);
    inputElement.value = '';
    renderTodoList();
}