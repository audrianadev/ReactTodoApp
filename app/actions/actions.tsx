export var setSearchText = (searchText: string) => {
  return{
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export var addTodo = (text: string) => {
  return {
    type: 'ADD_TODO',
    text
  };
};

export var addTodos = (todos: Array<Todo>) =>{
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export var editTodo = (id: string, text: string) => {
  return {
    type: 'EDIT_TODO',
    id,
    text
  };
};

export var deleteTodo = (id: string) => {
  return {
    type: 'DELETE_TODO',
    id
  };
};

export var toggleShowCompleted = () =>{
  return{
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var toggleTodo = (id: string) =>{
  return{
    type: 'TOGGLE_TODO',
    id
  };
};
