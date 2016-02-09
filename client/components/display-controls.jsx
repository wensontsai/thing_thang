'use strict';

import React from 'react'

var Reflux = require('reflux');
var StateMixin = require('reflux-state-mixin')(Reflux); 

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

var DisplaysStore = require('./displays-store');
var Actions = require('../actions');


module.exports = React.createClass({
	mixins:[
		StateMixin.connect(DisplaysStore)
	],
	componentDidMount: function(){
		
	},
	render: function(){
		return(
			<div className="display-controls">
				<button 
					className="turn-on-btn btn"
					onClick={this.sendCommand.bind(this, "turn-on")}
				>Turn On
				</button>
				<button 
					className="turn-off-btn btn"
					onClick={this.sendCommand.bind(this, "turn-off")}
				>Turn Off
				</button>
			</div>
		)
	},
	sendCommand: function(command){
		Actions.sendCommand(command);
	},
	componentWillReceiveProps: function(nextProps){
		
	},
	onChange: function(event, images){

	}
});