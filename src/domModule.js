import delteIcon from "./images/trash_6460112.png";
import checkIcon from "./images/check_1828643.png"
import { formatDistanceToNow } from "date-fns";

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
    const checkTodo = document.createElement("img");
    const removeTodo = document.createElement("img")

   
    console.log(task.getTitle())
    todoTitle.textContent = task.getTitle();
    todoTitle.setAttribute("id", "todo-title");
    todoDueDate.textContent = formatDistanceToNow(task.getDueDate(), { addSuffix: true });
    todoDueDate.setAttribute("id", "due-date")
    checkTodo.src = checkIcon;
    checkTodo.classList.add("check");
    removeTodo.src = delteIcon;
    removeTodo.setAttribute("id", "remove-todo");

   


    todoContainer.appendChild(checkTodo)
    todoContainer.appendChild(todoTitle);
    todoContainer.appendChild(todoDueDate);
    todoContainer.appendChild(removeTodo)
    todoContainer.classList.add("todo-container");

    todoList.appendChild(todoContainer);

    checkTodo.addEventListener('click', () => {
        if (task.isDone()) {
            task.markDone(false);
        } else {
            task.markDone(true);
        }
        checkTodo.classList.toggle('done');
    });

    removeTodo.addEventListener('click', () => {
        const index = tasks.indexOf(task);
        if (index !== -1) {
            tasks.splice(index, 1);
            todoList.removeChild(todoContainer);
        }
    });

    if (task.isDone()) {
        checkTodo.classList.add('done');
    }
}) 

}


export { renderProjectList, renderTodoList };