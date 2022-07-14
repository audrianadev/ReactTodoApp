import React = require('react');
import {useState, useRef} from 'react';

var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

function Todo (props){
  //gets all the values in this.props and sets them to variables of the same name
  var {id, text, completed, createdAt, completedAt, dispatch} = props;
  const [editMode, setEditMode] = useState('false');
  const [inputValue, setInputValue] = useState(text);
  //const inputText = useRef(null);
  
  const toggleEditMode = e => {
    setEditMode(editMode  == "true" ? "false" : "true");
  }

  /*const updateText = e => {
    setInputValue(inputValue);
  }*/

  const renderDate = () =>{
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
      <div className="columns small-9 medium-10 todo__text">
        <button className="toggleCompleted" onClick={() =>{
          dispatch(actions.toggleTodo(id));
        }}><i className="fa fa-check" aria-hidden="true"></i></button>
        <p className={editMode == "true" ? 'editMode' : ''}>{text}<br/>
        <small>{renderDate()}</small></p>
        <input type="text" value={inputValue} onChange={(e) =>{
            setInputValue(e.target.value);
            var text = e.target.value;
            dispatch(actions.editTodo(id, text));
          }} className={editMode == "true" ? '' : 'editMode'}/>
      </div>
      <div className="columns small-3 medium-2">
        <button className={editMode == "true" ? 'button editMode' : 'button'} onClick={toggleEditMode}><i className="fa fa-pencil" aria-hidden="true"></i></button>
        <button className={editMode == "true" ? 'button' : 'button editMode'} onClick={toggleEditMode}><i className="fa fa-check" aria-hidden="true"></i></button>
        <button className="button" onClick={
          (e) =>{
            dispatch(actions.deleteTodo(id));
          }} >X</button>
      </div>
    </div>
  )
};

//connect redux store to an individual component
export default connect()(Todo);
