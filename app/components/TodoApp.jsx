var React = require('react');
var TodoList = require('TodoList');
var TodoForm = require('TodoForm');

var TodoApp = React.createClass({
	getDefaultProps: function () {
        return {
            todos:[
				{
					id:0,
					text: 'Walk the dog'
				},
				{
					id:1,
					text: 'Clean the yard'
				},
				{
					id:2,
					text: 'Wash car'
				},
				{
					id:3,
					text: 'Clean room'
				}
			]
        }
    },
	getInitialState: function(){
		return{
			todos:this.props.todos
		}
	},
	handleDelete: function(task){
		const taskId = task.props.id;
		var x =0;
		console.log(task.props.id);

		for(x =0; x < this.state.todos.length;x++){
			if(this.state.todos[x].id == taskId){
	      	break;
	      }
		}

		/*const todoToRemove = this.state.todos.filter((todo) => {

	      if(todo.id == taskId){
	      	console.log(todo.id);
	      	return x;
	      }
	      x += 1;

	    });*/

		this.state.todos.splice(x, 1);

		this.setState({
			todos:this.state.todos
		});
	},
	handleTask:function(task){
		this.state.todos.push({id: this.state.todos.length, text: task});

		this.setState({
			todos:this.state.todos
		});
	},
	render: function(){
		var todos = this.state.todos;

		return(
			<div className="row">
				<h1>Your Todo List</h1>
				<TodoList todos={todos} deleteTask={this.handleDelete}/>
				<h2>Add A Task</h2>
				<TodoForm addTask={this.handleTask}/>
			</div>
		);
	}
});

module.exports = TodoApp;
