import { combineReducers } from 'redux';

import userReducer from './User/user.reducer';
import postsReducer from './Posts/posts.reducer';
import emailReducer from './Email/email.reducer'

export default combineReducers({
  user: userReducer,
  postsData: postsReducer,
  email: emailReducer,
});