var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export var Todo = React.createClass({
  render: function () {
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var renderDate = () =>{
      var message = 'Created ';
      var timestamp = createdAt;

      if(completed){
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };
    return (
      <div onClick={() =>{
          dispatch(actions.toggleTodo(id));
        }} className ="todo row">
        <div className="columns small-1">
          <input type="checkbox" checked={completed}/>
        </div>
        <div className="columns small-9 medium-10">
          <p>{text}<br/>
          <small>{renderDate()}</small></p>
        </div>
        <div className="columns small-2 medium-1">
          <button className="button" onClick={
            () =>{
              dispatch(actions.deleteTodo(id));
            }}  c>X</button>
        </div>

      </div>
    )
  }
});

//connect redux store to an individual component
export default connect()(Todo);
