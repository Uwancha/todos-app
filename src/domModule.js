
const todoList = document.getElementById('todo-list');

function renderProjectList(projects) {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';

    projects.forEach((project) => {
        const projectElement = document.createElement('li');
        projectElement.textContent = project.name;
        
        projectElement.addEventListener('click', () => {
            todoList.innerHTML = '';
            
            
            renderTodoList(project.todos, project.name);
            
        });
        projectList.appendChild(projectElement);
    });
}


function renderTodoList(tasks, name) {
    const nameOfProject = document.getElementById("title");
    nameOfProject.textContent = name;
    
    
    const todoList = document.querySelector("#todo-list");

    tasks.forEach((task) => {
        

    const todoContainer = document.createElement("div");
    const todoTitle = document.createElement("li");
    const todoDueDate = document.createElement("li");

   
    console.log(task.getTitle())
    todoTitle.textContent = task.getTitle();
    todoDueDate.textContent = task.getDueDate();
    if (task.isDone()) {
      todoContainer.classList.add("done");
    }


    todoContainer.appendChild(todoTitle);
    todoContainer.appendChild(todoDueDate);
    todoContainer.classList.add("todo-container");

    todoList.appendChild(todoContainer);
    });
} 


export { renderProjectList, renderTodoList };