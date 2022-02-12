var React = require('react');
var {connect} = require('react-redux');
import Todo from './Todo';
var TodoAPI = require('TodoAPI');

class TodoList extends React.Component{
  constructor(props: TodosState){
    super(props)
  }
  
  render(): JSX.Element{
    var {todos, showCompleted, searchText} = this.props;
    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <i style={{fontSize:16 + "px"}}>Nothing To Do</i>
        );
      }

      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo: Todo) => {
        return (
          <Todo key={todo.id} {...todo} />
        );
      });
    };

    return (
      <div className="row todoList">
        <div className="columns small-12">
        {renderTodos()}
        </div>
      </div>
    )
  }
};

//connect redux store to an individual component
export default connect(
  (state: TodosState) => {
    return state;
  }
)(TodoList);
