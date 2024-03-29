module.exports ={
  setTodos: function (todos: Todo){
    if(Array.isArray(todos)){
      //convert string to array (JSON.stringify)
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function(){
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try{
      todos = JSON.parse(stringTodos);
    } catch(e){

    }

    return Array.isArray(todos) ? todos : [];
  },
  filterTodos: function(todos: Array<Todo>, showCompleted: boolean, searchText: string){
    var filteredTodos = todos;

    //Filter By completed
    filteredTodos = filteredTodos.filter((todo: any) => {
      return !todo.completed || showCompleted;
    });

    //Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    })


    //Sort todos with non-completed first, a and b are todos
    filteredTodos.sort((a, b) => {
      if(!a.completed && b.completed){
        return -1;
      } else if(a.completed && !b.completed){
        return 1;
      } else{
        return 0;
      }
    });

    return filteredTodos;
  }
};
