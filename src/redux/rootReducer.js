import { combineReducers } from 'redux';


import userReducer from './User/user.reducer';
import postsReducer from './Posts/posts.reducer';

export default combineReducers({
  user: userReducer,
  postsData: postsReducer,
});