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

export default combineReducers({ data });
