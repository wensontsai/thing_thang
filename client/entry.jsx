'use strict';
import 'babel-polyfill';

import React from 'react';
import { browserHistory, Router, Route } from 'react-router';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import promise from 'redux-promise';

// JSS (CSS written in JSON)
import jss from 'jss';
import jssVendorPrefixer from 'jss-vendor-prefixer';
import jssPx from 'jss-px';
import jssNested from 'jss-nested';
import jssCamelCase from 'jss-camel-case';
jss.use(jssVendorPrefixer());
jss.use(jssPx());
jss.use(jssNested());
jss.use(jssCamelCase());

// import CSS
import './entry.scss';

// Store
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

// Components
import Main from './pages/main'
import Login from './components/auth/login'
import Displays from './components/displays/displays-all'
import SingleDisplay from './components/displays/display-single'


const createStoreWithMiddleware = applyMiddleware(
  thunk,
  promise,
  createLogger()
)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Main} />
      <Route path='/login' component={Login} />
      <Route path='/displays' component={Displays} />
      <Route path='/displays/:name' component={SingleDisplay} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
