import React from 'react';
// import { Link, IndexRoute } from 'react-router';
import { Router, Route, browserHistory } from 'react-router';
import Main from './component/main';
import About from './component/about';
import Experience from './component/experience';
import Protfoilo from './component/portfoilo';

const RouteComponent = () =>
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      {/* <IndexRoute component={Dashboard} /> */}
      <Route path="about" component={About} />
      <Route path="experience" component={Experience} />
      <Route path="portfoilo" component={Protfoilo} />
    </Route>
  </Router>;

export default RouteComponent;
