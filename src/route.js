import React from 'react';
// import { Link, IndexRoute } from 'react-router';
import { Router, Route, browserHistory } from 'react-router';
import Main from './component/main';
import AboutMe from './component/aboutme';
import Protfoilo from './component/portfoilo';

const RouteComponent = () =>
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      {/* <IndexRoute component={Dashboard} /> */}
      <Route path="about" component={AboutMe} />
      <Route path="portfoilo" component={Protfoilo} />
    </Route>
  </Router>;

export default RouteComponent;
