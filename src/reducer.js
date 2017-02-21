import { combineReducers } from 'redux';

const defaultModel = {
  name: 'Name',
  email: '',
  summary: '',
  weblink: [],
};

const data = (state = defaultModel, action) => {
  switch (action.type) {
    case 'QueryData':
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
};

const exp = (state = { work: [], education: [] }, action) => {
  switch (action.type) {
    case 'QueryExp':
      return Object.assign({}, state, action.exp);
    default:
      return state;
  }
};

export default combineReducers({ data, exp });
