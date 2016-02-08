import React from 'react';
var Reflux = require('reflux');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

var Actions = require('../../actions');

module.exports = React.createClass({
	mixins:[
		// Reflux.listenTo(ImageStore, 'onChange')
	],
	getInitialState: function(){
		return {
			
		}
	},
	componentWillMount: function(){

	},
	render: function(){
		return(
			<div className="login pageCenter">
				<div className="pageTitle">
					Login Page
				</div>
				<Link to="/displays">All Displays</Link>
			</div>
		)
	},
	componentWillReceiveProps: function(nextProps){
		
	},
	onChange: function(event, images){

	}
});