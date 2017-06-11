var React = require('react');

var Todo = React.createClass({
  render: function () {
    var {id, text, completed} = this.props;

    return (
      <div>
      <span onClick={() =>{
          this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={completed}/> {text}
      </span>
      <button className="button" onClick={
          () =>{
            this.props.deleteClicked(id);
          }}>X</button>
      </div>
    )
  }
});

module.exports = Todo;
