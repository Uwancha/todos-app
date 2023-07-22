

function creaeToDo(title, description, duedate, priority) {
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => duedate;
    const getPriority = () => priority;

    return { getTitle, getDescription, getDueDate, getPriority };
}

const projects = [];

function newProject(projectName) {
    projectName = []
    //const createproject = (projectName) => projectName = [];
    const addTodo = (addTask) => projectName.push(addTask)

    projects.push(projectName)

    return { addTodo };
}

const coding = creaeToDo("To-do", "build a project", "This week", "high");
const dev = newProject("coding");
dev.addTodo(coding)