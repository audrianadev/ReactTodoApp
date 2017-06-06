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
		this.state.todos.splice(this.state.todos.indexOf(task), 1);
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

		return(
			<div className="row">
				<h1>Your Todo List</h1>
				<TodoList todos={this.state.todos} deleteTask={this.handleDelete}/>
				<h2>Add A Task</h2>
				<TodoForm addTask={this.handleTask}/>
			</div>
		);
	}
});

module.exports = TodoApp;
