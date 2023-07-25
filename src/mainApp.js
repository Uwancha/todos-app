import "./style.css"
import { renderDefaultTasks, renderProjectList, renderTodoList } from "./domModule";
import { createToDoFactory, createProjectFactory } from "./appLogic";

const home = createProjectFactory("home")
const one = createToDoFactory("Coding", "Do coding", "everyday", "high");
  const two = createToDoFactory("Reading", "Read 10 pages", "everyday", "high");
  const three = createToDoFactory("Exercise", "Do exercises", "every day", "high");
  const four = createToDoFactory("Meditate", "Meditating", "everyday", "high");

home.addTodo(one);
home.addTodo(two);
home.addTodo(three);
home.addTodo(four);
one.markDone()

renderDefaultTasks(home.todos);




 
