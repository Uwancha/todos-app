import "./style.css"
import { renderDefaultTasks, renderProjectList, renderTodoList } from "./domModule";
import { createToDoFactory, createProjectFactory } from "./appLogic";

const home = []
const one = createToDoFactory("Coding", "Do coding", "everyday", "high");
  const two = createToDoFactory("Reading", "Read 10 pages", "everyday", "high");
  const three = createToDoFactory("Exercise", "Do exercises", "every day", "high");
  const four = createToDoFactory("Meditate", "Meditating", "everyday", "high");

home.push(one);
home.push(two);
home.push(three);
home.push(four);
one.markDone()

renderDefaultTasks(home);




 
