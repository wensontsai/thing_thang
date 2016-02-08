import React from 'react'

var Reflux = require('reflux');
var StateMixin = require('reflux-state-mixin')(Reflux); 

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

var DisplaysStore = require('./displays-store');
var Actions = require('../../actions');

module.exports = React.createClass({
	mixins:[
		StateMixin.connect(DisplaysStore)
	],
	componentDidMount: function(){

	},
	render: function(){
		return(
			<div className="displays pageCenter">
				<div className="pageTitle">
					All Displays Page
				</div>
				<div className="all-display-items">
					{this.state.displaysArray.map(function(display){
						return (
							<Link to={`/displays/${display}`}
								onClick={this.selectDisplay.bind(this, display)}
							>
								<div className="display-item">
									<div className="sub-title">
										{display}
									</div>
								</div>
							</Link>
						)
					}, this )}
				</div>
			</div>
		)
	},
	selectDisplay: function(display){
		Actions.selectDisplay(display);
	},

});