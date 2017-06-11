var React = require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');


var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted:false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  },
  componentDidUpdate: function(){
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo: function (text) {
    this.setState({
      todos:[
        ...this.state.todos,
        {
          id: uuid(),
          text:text,
          completed:false
        }
      ]
    });
  },
  handleDeleteTodo: function(id){
		var x =0;

		for(x =0; x < this.state.todos.length;x++){
			if(this.state.todos[x].id == id){
	      	break;
	      }
		}

		this.state.todos.splice(x, 1);

		this.setState({
			todos:this.state.todos
		});
	},
  handleToggle:function(id){
    var updatedTodos = this.state.todos.map((todo)=>{
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({
      todos: updatedTodos
    });
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function () {
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div className="row">
        <div className="columns small-12">
        <h1>Todo App</h1>
        <TodoSearch onSearch={this.handleSearch}/>
        <hr />
        <h2>Your Todos</h2>
        <TodoList todos={filteredTodos} onToggle={this.handleToggle}  deleteClicked={this.handleDeleteTodo}/>
        <hr />
        <h2>Add A Todo</h2>
        <AddTodo onAddTodo={this.handleAddTodo}/>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
