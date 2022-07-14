var moment = require('moment');
var uuid = require('node-uuid');

export var searchTextReducer = (state = "", action: any) =>{
  switch(action.type){
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
};

export var showCompletedReducer = (state = true, action: any) => {
  switch(action.type){
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
}

export var todosReducer = (state= [], action: any) => {
  switch(action.type){
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid(),
          text:action.text,
          completed:false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if(todo.id === action.id){
          var nextCompleted = !todo.completed;

          return {
            id: todo.id,
            text: todo.text,
            createdAt: todo.createdAt,
            completed: nextCompleted,
            completedAt: nextCompleted ? moment().unix(): undefined
          };
        }
      });
      case 'ADD_TODOS':
        return [
          ...state,
          ...action.todos
        ];
        case 'EDIT_TODO':
          return state.map((todo) => {
            if(todo.id === action.id){
              var newText = action.text;

              return {
                id: todo.id,
                text: newText,
                createdAt: todo.createdAt,
                completed: todo.completed,
                completedAt: todo.completedAt
              };
            }
          });
      case 'DELETE_TODO':

        var newState = state.filter((todo)=>{
          return todo.id != action.id;
        })

    		return [
          ...newState
        ];

    default:
      return state;
  }
}
