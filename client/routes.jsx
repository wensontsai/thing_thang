import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

import Main from './components/main'
import Login from './components/login-view/login'
import Displays from './components/displays-view/all-displays'
import SingleDisplay from './components/displays-view/single-display'

render(
  <Router history={browserHistory}>
    <Route path='/' component={Main} />
    <Route path='/login' component={Login} />
    <Route path='/displays' component={Displays} />
    <Route path='/displays/:name' component={SingleDisplay} />
  </Router>,
  document.getElementById('root')
)