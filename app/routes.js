import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';

import WeJay from './components/WeJay';


export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/wejay" component={WeJay} />
    </Route>
  </Router>
);
