var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export var Todo = React.createClass({
  getInitialState: function () {
      return {
          editMode:false
      }
  },
  toggleEditMode: function () {
    console.log(!this.state.editMode);
    this.setState({
      editMode: !this.state.editMode
    })
  },
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
      <div  className ={completed ? 'todo row todoCompleted' : 'todo row'}>
        <div className="columns small-9 medium-10 todoText" onClick={() =>{
            dispatch(actions.toggleTodo(id));
          }}>
          <i className="fa fa-check" aria-hidden="true"></i>
          <p className={this.state.editMode ? 'editMode' : ''}>{text}<br/>
          <small>{renderDate()}</small></p>
          <input type="text" ref="text" value={text} onChange={() =>{
              var text = this.refs.text.value;
              dispatch(actions.editTodo(id, text));
            }} className={this.state.editMode ? '' : 'editMode'}/>
        </div>
        <div className="columns small-3 medium-2">
          <button className={this.state.editMode ? 'button editMode' : 'button'} onClick={this.toggleEditMode}><i className="fa fa-pencil" aria-hidden="true"></i></button>
          <button className={this.state.editMode ? 'button' : 'button editMode'} onClick={this.toggleEditMode}><i className="fa fa-check" aria-hidden="true"></i></button>
          <button className="button" onClick={
            () =>{
              dispatch(actions.deleteTodo(id));
            }} >X</button>
        </div>

      </div>
    )
  }
});

//connect redux store to an individual component
export default connect()(Todo);
