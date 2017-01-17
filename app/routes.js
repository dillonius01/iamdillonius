import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App';
import Header from './components/Header';


export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Header} />
    </Route>
  </Router>
);
