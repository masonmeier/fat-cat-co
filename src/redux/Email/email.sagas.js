import { auth } from '../../firebase/utils';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { setEmail, fetchEmailStart } from './email.actions';
import { handleAddEmail, handleFetchEmail, handleDeleteEmail } from './email.helpers';
import emailTypes from './email.types';

export function* addEmail({ payload }) {

  try {
    const timestamp = new Date();
    yield handleAddEmail({
      ...payload,
      postAdminUserUID: auth.currentUser.uid,
      createdDate: timestamp
    });
    yield put(
      fetchEmailStart()
    );


  } catch (err) {
    // console.log(err);
  }

}

export function* onAddEmailStart() {
  yield takeLatest(emailTypes.ADD_NEW_EMAIL_START, addEmail);
}

export function* fetchEmail({ payload }) {
  try {
    const email = yield handleFetchEmail(payload);
    yield put(
      setEmail(email)
    );

  } catch (err) {
    // console.log(err);
  }
}

export function* onFetchEmailStart() {
  yield takeLatest(emailTypes.FETCH_EMAIL_START, fetchEmail);
}

export function* deleteEmail({ payload }) {
  try {
    yield handleDeleteEmail(payload);
    yield put (
      fetchEmailStart()
    );

  } catch (err) {
    // console.log(err);
  }
}

export function* onDeleteEmailStart() {
  yield takeLatest(emailTypes.DELETE_EMAIL_START, deleteEmail);
}

export default function* emailSagas() {
  yield all([
    call(onAddEmailStart),
    call(onFetchEmailStart),
    call(onDeleteEmailStart),
    call(onFetchEmailStart),
  ])
}