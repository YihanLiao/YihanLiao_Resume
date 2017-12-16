import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Main from './component/main';
import About from './component/about';
import Experience from './component/experience';

const RouteComponent = () =>
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      {/* <IndexRoute component={Dashboard} /> */}
      <Route path="about" component={About} />
      <Route path="experience" component={Experience} />
    </Route>
  </Router>;

export default RouteComponent;
