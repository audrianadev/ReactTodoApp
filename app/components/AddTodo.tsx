import React = require('react');
import {useState, useRef} from 'react';
var {connect} = require('react-redux');
var actions = require('actions');

function AddTodo(props){
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  const inputField = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    var {dispatch} = props;
    if(inputField.current !== null || inputField.current !== undefined){
      setInputValue(inputValue);

      var todoText = inputValue;
  
      if (todoText.length > 0) {
        setInputValue("");
        dispatch(actions.addTodo(todoText));
      } else {
        //inputField.current.focus();
      }
    }
  }

  return (
    <div className="row">
    <div className="columns small-12">
      <form onSubmit={handleSubmit}>
        <div className="row collapse">
          <div className="small-10 medium-11 columns">
            <input type="text" value={inputValue} ref={inputField} placeholder="What do you need to do?"  onChange={(e) =>{
                setInputValue(e.target.value);
              }}/>
          </div>
          <div className="small-2 medium-1 columns">
            <button className="button postfix expanded"><i className="fa fa-plus" aria-hidden="true"></i></button>
          </div>
        </div>
      </form>
    </div>
  </div>
  );
};

export default connect()(AddTodo);
