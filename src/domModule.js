
const todoList = document.getElementById('todo-list');

function renderDefaultTasks(tasks) {
  tasks.forEach((task) => {
    renderTodoList(task);
})
}


function renderProjectList(projects) {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';

    projects.forEach((project) => {
        const projectElement = document.createElement('li');
        projectElement.textContent = project.name;
        projectElement.addEventListener('click', () => {
            todoList.innerHTML = '';
            project.todos.forEach((todo) => {
                renderTodoList(todo);
            })
        });
        projectList.appendChild(projectElement);
    });
}



function renderTodoList(todo) {

    const todoContainer = document.createElement("div");
    const todoTitle = document.createElement("li");
    const todoDueDate = document.createElement("li");
    
    console.log(todo.getTitle())
    todoTitle.textContent = todo.getTitle();
    todoDueDate.textContent = todo.getDueDate();
    if (todo.isDone()) {
      todoContainer.classList.add("done");
    }


    todoContainer.appendChild(todoTitle);
    todoContainer.appendChild(todoDueDate);
    todoContainer.classList.add("todo-container");

    todoList.appendChild(todoContainer);

} 

export { renderDefaultTasks, renderProjectList, renderTodoList };