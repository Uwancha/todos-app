import { format } from "date-fns";


function createToDoFactory(title, description, dueDate, priority) {
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => {
      try {
      const date = new Date(dueDate);

  
      return format(date, 'yy-MM-dd');

      } catch (err) {
        console.log(err)
      }
    };
    const getPriority = () => priority;
    const markDone = (value) => done = value;
    
  
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

  function validateTodo(todo) {
    return todo && typeof todo.getTitle === 'function';
  }

  function isValidJson(str) {
    try {
      JSON.parse(str);
      return true;  
    } catch (e) {
      return false;
    }
  }
  
function createProjectFactory(name) {
  let todos = [];


  const saveTodosToLocalStorage = () => {
    console.log("Saving projects...");
    try {
      localStorage.setItem(name, JSON.stringify(todos));
    } catch (err) {
      console.error("Error saving todos");
    }
  };

  
  const loadTodosFromLocalStorage = () => {
    try {
      const storedTodos = localStorage.getItem(name);
      
      let tempTodos = [];

      let parsed

      if(storedTodos && isValidJson(storedTodos)) {
        try {
        parsed = JSON.parse(storedTodos);

        parsed.forEach(todo => {
          if(validateTodo(todo)) {
            tempTodos.push(todo);  
          }
        });

      } catch (err) {
        console.error("Error parsing JSON");
        return;
      }
  
    } else {
      parsed = [];
    }
      

    if(!parsed.every(validateTodo)) {
      localStorage.clear();
    }

    todos = tempTodos;

    } catch (error) {
      
      console.error(`Error while loading todos from local storage: ${error}`);
    }
  };


  const addTodo = (todo) => {
    todos.push(todo);
    saveTodosToLocalStorage();
  };

  const removeTodo = (todo) => {
    const index = todos.indexOf(todo);
    if (index !== -1) {
      todos.splice(index, 1);
      saveTodosToLocalStorage();
    }
  };

  
  loadTodosFromLocalStorage();

  
    return {
      name,
      todos,
      addTodo,
      removeTodo,
    };
  }
  
  export { validateTodo, createToDoFactory, createProjectFactory }