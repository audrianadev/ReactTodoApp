import React = require('react');
import {useRef, useState} from 'react';
var {connect} = require('react-redux');
var actions = require('actions');

function TodoSearch(props) {
  var {dispatch, showCompleted, searchText} = props;
  const [inputValue, setInputValue] = useState(searchText);
  const searchTextInput = useRef();

  return (
    <div className="row todoSearch">
        <div className="columns small-12">
            <input type="search" ref={searchTextInput} placeholder="Search todos"  value={inputValue} onChange={(e) =>{
                var searchText = e.target.value;
                setInputValue(e.target.value);
                dispatch(actions.setSearchText(searchText));
              }}/>
        </div>
        <div className="columns small-12">
          <label>
            <input type="checkbox" checked={showCompleted} onChange={(e) => {
                dispatch(actions.toggleShowCompleted());
              }}/>
            Include completed todos?</label>
        </div>
    </div>
  );
};

export default connect(
  (state: TodosState) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoSearch);
