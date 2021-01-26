import postTypes from './posts.types';
import postsTypes from './posts.types';

const INITIAL_STATE = {
  posts: [],
  post: {},
};

const postsReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case postTypes.SET_POSTS:
      return {
        ...state,
        posts: action.payload
      }
    case postsTypes.SET_POST:
      return {
        ...state,
        post: action.payload
      }
    default:
      return state;
  }
};

export default postsReducer;