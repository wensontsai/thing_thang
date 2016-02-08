'use strict';

import React from 'react'

var update = require('react-addons-update');

var Reflux = require('reflux');
var StateMixin = require('reflux-state-mixin')(Reflux); 
var Actions = require('../../actions');

var Api = require('../../utils/api_ajax');

// var Client = require('node-rest-client').Client;

module.exports = Reflux.createStore({
	mixins: [
		StateMixin
	],
	listenables: [
		Actions
	],
	getInitialState: function(){
		return {
			displaysArray: [
				"Europe",
				"NYC",
				"South America",
				"Asia",
				"Airport",
				"Mars"
			],
			currentDisplay: '',
		}
	},
	selectDisplay: function(display){
		this.setState({
			currentDisplay: display
		});
	},
	sendCommand: function(command){
		var paramsObj = {
			display: this.state.currentDisplay,
			command: command
		};

		Api.sendCommand(paramsObj, function(data){
			if(data !== 'fail'){

				console.log(data);	
				this.setState({

				});
			}
			if(data === 'fail'){
				this.setState({
					errorMsg: 'Query failed!'
				});
			}
		}.bind(this) );
	},
});