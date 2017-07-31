var React = require("react");
var Link = require("react-router").Link;

var Login = React.createClass({
	render: function() {
		return {
			<div className = "container">
				<div className = "col-md-12">
					<div className="panel panel-primary">
						<div className="panel-heading">
							<h3 className="panel-title">Log in</h3>
						</div>

					</div>
				</div>
			</div>
		}
	}
});

module.exports = Login;