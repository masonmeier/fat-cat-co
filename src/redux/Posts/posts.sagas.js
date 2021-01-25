import { auth } from '../../firebase/utils';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { setPosts, setPost, fetchPostsStart } from './posts.actions';
import { handleAddPost, handleFetchPosts,
  handleFetchPost, handleDeletePost } from './posts.helpers';
import postsTypes from './posts.types';

export function* addPost({ payload }) {

  try {
    const timestamp = new Date();
    yield handleAddPost({
      ...payload,
      postAdminUserUID: auth.currentUser.uid,
      createdDate: timestamp
    });
    yield put(
      fetchPostsStart()
    );


  } catch (err) {
    // console.log(err);
  }

}

export function* onAddPostStart() {
  yield takeLatest(postsTypes.ADD_NEW_POST_START, addPost);
}

export function* fetchPosts({ payload }) {
  try {
    const posts = yield handleFetchPosts(payload);
    yield put(
      setPosts(posts)
    );

  } catch (err) {
    // console.log(err);
  }
}

export function* onFetchPostsStart() {
  yield takeLatest(postsTypes.FETCH_POSTS_START, fetchPosts);
}

export function* deletePost({ payload }) {
  try {
    yield handleDeletePost(payload);
    yield put (
      fetchPostsStart()
    );

  } catch (err) {
    // console.log(err);
  }
}

export function* onDeletePostStart() {
  yield takeLatest(postsTypes.DELETE_POST_START, deletePost);
}

export function* fetchPost({ payload }) {
  try {
    const post = yield handleFetchPost(payload);
    yield put(
      setPost(post)
    );

  } catch (err) {
    // console.log(err);
  }
}

export function* onFetchPostStart() {
  yield takeLatest(postsTypes.FETCH_POST_START, fetchPost);
}

export default function* postsSagas() {
  yield all([
    call(onAddPostStart),
    call(onFetchPostsStart),
    call(onDeletePostStart),
    call(onFetchPostStart),
  ])
}