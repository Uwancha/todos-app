import "./style.css"
import {  renderProjectList, renderTodoList } from "./domModule";
import { createToDoFactory, createProjectFactory } from "./appLogic";


const addTask = document.querySelector("#add-task");
const formContainer = document.querySelector(".form");
const todoList = document.getElementById('todo-list');
const removeForm = document.querySelector(".remove-form")


const defaultProjectArrays = []
const new_Projects = []


const home = createProjectFactory("Home");
const one = createToDoFactory("Coding", "Do coding", "Daily", "high");
const two = createToDoFactory("Reading", "Read 10 pages", "Daily", "high");
const three = createToDoFactory("Exercise", "Do exercises", "Daily", "high");
const four = createToDoFactory("Meditate", "Meditating", "Daily", "high");

home.addTodo(one);
home.addTodo(two);
home.addTodo(three);
home.addTodo(four);
one.markDone();
defaultProjectArrays.push(home)
renderTodoList(home.todos, home.name);

const homeTasks = document.querySelector("#home");
homeTasks.addEventListener("click", () => {
  const nameOfProject = document.getElementById("title");
  todoList.innerHTML = '';
  nameOfProject.textContent = home.name;

  renderTodoList(home.todos, home.name)
})


const today = createProjectFactory("Today");
defaultProjectArrays.push(today)

const todaysTasks = document.querySelector("#today");

todaysTasks.addEventListener("click", () => {
  const nameOfProject = document.getElementById("title");
  todoList.innerHTML = '';
  nameOfProject.textContent = today.name;

  renderTodoList(today.todos, today.name)
})

const week = createProjectFactory("Week");
defaultProjectArrays.push(week)

const weeksTasks = document.querySelector("#week");

weeksTasks.addEventListener("click", () => {
  const nameOfProject = document.getElementById("title");
  todoList.innerHTML = '';
  nameOfProject.textContent = week.name;

  renderTodoList(week.todos, week.name)
})



function addTaskTo () {
  const taskTitle = document.querySelector('#task-title').value;
  const dueDate = document.querySelector('#duedate').value;
  const priority = document.querySelector('input[name="priority"]:checked').value;
  const description = document.querySelector('input[placeholder="task description"]').value;
  
  console.log(taskTitle, dueDate, priority, description);

  const newTask = createToDoFactory(taskTitle,  description, dueDate, priority)
  const projectName = document.querySelector("#title").textContent;
  
  let project = defaultProjectArrays.find(project => project.name == projectName);

  if (project) {
    project.addTodo(newTask);
  
  }else {
    project = new_Projects.find(project => project.name == projectName);
    project.addTodo(newTask);
}
  todoList.innerHTML = '';
  console.log(project.todos);
  renderTodoList(project.todos, project.name);
}


addTask.addEventListener('click', () => {
  formContainer.classList.add("visible");
})



const form = document.querySelector('form'); 
form.addEventListener('submit', function(event) { 
  event.preventDefault(); 

  const createNewProject = document.querySelector('#project-select').value == 'new'; 
  const newProjectName = document.querySelector('#project').value; 
  if (createNewProject) { 
    // Create new project 
    const newProject = createProjectFactory(newProjectName); 
    // Add task to new project 
    const taskTitle = document.querySelector('#task-title').value; 
    const dueDate = document.querySelector('#duedate').value;
    const priority = document.querySelector('input[name="priority"]:checked').value;
    const description = document.querySelector('input[placeholder="task description"]').value;
  
    const newTask = createToDoFactory(taskTitle, dueDate, priority, description);
    newProject.addTodo(newTask); 
    new_Projects.push(newProject);
    renderProjectList(new_Projects);

    formContainer.classList.remove("visible");
    formContainer.classList.add("form");

  
    taskTitle.value = ""
    dueDate.value = ""
    priority.value = ""
    description.value = ""
  } 
    else { 
      // Add task to existing project 
      const taskTitle = document.querySelector('#task-title');
      const dueDate = document.querySelector('#duedate');
      const priority = document.querySelector('input[name="priority"]:checked');
      const description = document.querySelector('input[placeholder="task description"]');

      addTaskTo();
      formContainer.classList.remove("visible");
      formContainer.classList.add("form");

  
      taskTitle.value = ""
      dueDate.value = ""
      priority.value = ""
      description.value = ""
    } 
  }) 

document.querySelector('#project-select').addEventListener('change', () => { 
  const showNewProject = document.querySelector('#project-select').value == 'new'; 
  document.querySelector('#new-project').style.display = showNewProject ? 'block' : 'none'; 
})


removeForm.addEventListener("click", () => {
  formContainer.classList.remove("visible");
  formContainer.classList.add("form");
})


 
