import React from 'react';
import update from 'react-addons-update';

import { createStore } from 'redux';
import { combineReducers } from 'redux';

import { Provider } from 'react-redux';
import { Connect } from 'react-redux';

import { createSelector } from 'reselect'

var Api = require('../../utils/api');

var Client = require('node-rest-client').Client;

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