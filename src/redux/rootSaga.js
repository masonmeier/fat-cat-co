import { all, call } from 'redux-saga/effects';

import userSagas from './User/user.sagas';
import postsSagas from './Posts/posts.sagas';
import emailSagas from './Email/email.sagas';

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(postsSagas),
    call(emailSagas),
  ])
}