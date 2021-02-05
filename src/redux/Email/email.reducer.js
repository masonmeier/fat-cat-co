import postTypes from './email.types';

const INITIAL_STATE = {
  email: {},
};

const emailReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case postTypes.SET_EMAIL:
      return {
        ...state,
        post: action.payload
      }
    default:
      return state;
  }
};

export default emailReducer;