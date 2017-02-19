import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Route from './route';
import reducer from './reducer';

let store = createStore(reducer);

ReactDOM.render((
  <Provider store={store}>
    <Route />
  </Provider>
), document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
