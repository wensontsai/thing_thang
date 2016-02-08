var React = require('react');
var Reflux = require('reflux');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

module.exports = React.createClass({
	render: function(){
		return(
			<div className="pageCenter">
				<div className="pageTitle">
					Gulliver's Gate Command Center
				</div>
				<div>
					<Link to="/login" >Login</Link>
				</div>		
			</div>
		)
	},
});