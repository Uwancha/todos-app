
function createToDoFactory(title, description, dueDate, priority) {
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
  
    const markDone = () => {
      done = true;
    };
  
   let done = false;
  
    return {
      getTitle,
      getDescription,
      getDueDate,
      getPriority,
      markDone,
     isDone: () => done,
    };
  }
  
  function createProjectFactory(name) {
    const todos = [];
  
    const addTodo = (todo) => {
      todos.push(todo);
    };
  
    const removeTodo = (todo) => {
      const index = todos.indexOf(todo);
      if (index !== -1) {
        todos.splice(index, 1);
      }
    };
  
    return {
      name,
      todos,
      addTodo,
      removeTodo,
    };
  }
  
  export { createToDoFactory, createProjectFactory }