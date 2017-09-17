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
        <div className="columns small-12  large-offset-2 large-8">
          <h1>Todo List App</h1>
          <TodoSearch/>
          <h2>Your Todo List</h2>
          <TodoList/>
          <hr />
          <h2>Add A Task</h2>
          <AddTodo/>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
