import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Main from './component/main';
import AboutMe from './component/aboutme';
import Protfoilo from './component/portfoilo';
// import Page404 from './component/page404.js';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      {/* <IndexRoute component={Dashboard} /> */}
      <Route path="about" component={AboutMe} />
      <Route path="portfoilo" component={Protfoilo} />
    </Route>
  </Router>
), document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
