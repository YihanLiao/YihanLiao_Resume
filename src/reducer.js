import { combineReducers } from 'redux';

const defaultModel = {
  name: 'Name',
};

const dataStore = (state = defaultModel, action) => {
  switch (action.type) {
    case 'QueryData':
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
};

export default combineReducers({ dataStore });
