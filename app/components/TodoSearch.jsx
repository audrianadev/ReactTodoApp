var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

class TodoSearch extends React.Component{
  render() {
    var {dispatch, showCompleted, searchText} = this.props;
    return (
      <div className="row todoSearch">
          <div className="columns small-12">
              <input type="search" ref="searchText" placeholder="Search todos" value={searchText} onChange={() =>{
                  var searchText = this.refs.searchText.value;
                  dispatch(actions.setSearchText(searchText));
                }}/>
          </div>
          <div className="columns small-12">
            <label>
              <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
                  dispatch(actions.toggleShowCompleted());
                }}/>
              Include completed todos?</label>
          </div>
      </div>
    );
  }
};

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoSearch);
