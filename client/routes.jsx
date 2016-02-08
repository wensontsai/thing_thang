'use strict';

import React from 'react'
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/HashHistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main');
var Login = require('./components/login-view/login');
var Displays = require('./components/displays-view/all-displays');
var SingleDisplay = require('./components/displays-view/single-display');

module.exports = (
	<Router history={new HashHistory}>
		<Route path="/" component={Main}></Route>
		<Route path="/login" component={Login}></Route>
		<Route path="/displays" component={Displays}></Route>
		<Route path="/displays/:name" component={SingleDisplay}></Route>
	</Router>
);