var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
	getDefaultProps: function () {
        return {
            todos:[]
        }
    },
	getInitialState: function(){
		return{
			todos: this.props.todos
		}
	},
	deletePressed: function(task){
		this.props.deleteTask(task);
	},
	render: function(){
		var todos = this.state.todos;
		console.log(todos);
		var renderTodos = () => {
			return todos.map((todo) => {
				return (
					//{..todo} let's you spread out allattributes on todo into it's own props
					<Todo key={todo.id} {...todo} deletePressed={this.deletePressed} />
				);
			});
		};

		return (
			<div className="row">
				<div className="large-12 columns">
					{renderTodos()}
				</div>
			</div>
		)
	}

});

module.exports = TodoList;

