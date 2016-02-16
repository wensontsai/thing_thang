'use strict';
import 'babel-polyfill';

import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { browserHistory, Router, Route } from 'react-router';
import { syncHistory, routeReducer } from 'react-router-redux';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import reducers from './reducers';

// import CSS
import './entry.scss';


// Components
import Main from './pages/main'
import Login from './components/auth/login'
import DisplayAll from './components/displays/display-all'
import SingleDisplay from './components/displays/display-single'


// Middleware


// // adding routing to reducers
// const reducerRouted = combineReducers(Object.assign({}, reducers, {
//   routing: routeReducer
// }));
// const reduxRouterMiddleware = syncHistory(browserHistory);


const createStoreWithMiddleware = applyMiddleware(
  thunk,
  promise,
  // reduxRouterMiddleware,
  createLogger(),
)(createStore);

const store = createStoreWithMiddleware(reducers);
// const store = createStoreWithMiddleware(reducerRouted);




ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory} >
      <Route path='/' component={Main} />
      <Route path='/login' component={Login} />
      <Route path='/displays' component={DisplayAll} />
      <Route path='/displays/:name' component={SingleDisplay} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
