var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';


var TodoApp = React.createClass({
  render: function () {
    return (
      <div className="row">
        <div className="columns small-12">
          <h1>Todo App</h1>
          <TodoSearch/>
          <hr />
          <h2>Your Todos</h2>
          <TodoList/>
          <hr />
          <h2>Add A Todo</h2>
          <AddTodo/>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
