var React = require('react');

var Todo = React.createClass({
	deleteClicked: function(e){
		this.props.deletePressed(this);
	},
	render: function(){
		var {id, text} = this.props;
		return (
			<div>
				{text}
				<button onClick={this.deleteClicked}>X</button>
			</div>
		)
	}
});

module.exports = Todo;