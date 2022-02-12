interface Todo {
  id: string,
  text: string,
  completed: boolean,
  createdAt: string,
  completedAt: string
}

interface TodosState{ 
  searchText: string, 
  showCompleted: boolean, 
  todos: Array<Todo>
}