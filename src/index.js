import React from 'react';
import ReactDOM from 'react-dom';
import Route from './route';

const AppContainer = ({ children }) =>
  <div>
    { children }
  </div>;
AppContainer.defaultProps = {
  children: React.PropTypes.node.isRequire,
};

ReactDOM.render((
  <AppContainer>
    <Route />
  </AppContainer>
), document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
