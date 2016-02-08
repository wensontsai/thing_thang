'use strict';

import React from 'react'

var Reflux = require('reflux');
var StateMixin = require('reflux-state-mixin')(Reflux); 

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

var DisplaysStore = require('./displays-store');

var Actions = require('../../actions');

var DisplayControls = require('./display-controls');


module.exports = React.createClass({
	mixins:[
		Router.CurrentPath,
		StateMixin.connect(DisplaysStore)
	],
	componentWillMount: function(){
		var display = this.props.location.pathname.split('/')[2];
		Actions.selectDisplay(display);
	},
	render: function(){
		return(
			<div className="single-display pageCenter">
				<div className="pageTitle">
					{this.state.currentDisplay} Display
				</div>
				<DisplayControls />
			</div>
		)
	},
	componentWillReceiveProps: function(nextProps){
		
	},
});