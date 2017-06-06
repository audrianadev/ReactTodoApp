var React = require('react');

var TodoForm = React.createClass({
	onFormSubmit: function(e){
	    e.preventDefault();

	    var task = this.refs.task.value;

	    if(task.length > 0){
	      this.refs.task.value = "";
	      this.props.addTask(task);
	    }
	  },
	render: function(){
			return (
			<div className="row">
			    <div className="large-12 columns">
			    <form onSubmit={this.onFormSubmit}>
			      <div className="input-group">
              		<input className="input-group-field" type="search" ref="task"/>
             		 <div className="input-group-button">
                		<button className="button">Go</button>
              		</div>
            		</div>
			      </form>
			    </div>
			  </div>
		)
	}
});

module.exports = TodoForm;