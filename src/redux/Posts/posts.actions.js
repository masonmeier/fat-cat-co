import postsTypes from './posts.types';

export const addPostStart = postData => ({
  type: postsTypes.ADD_NEW_POST_START,
  payload: postData
});

export const fetchPostsStart = (filters={}) => ({
  type: postsTypes.FETCH_POSTS_START,
  payload: filters
});

export const setPosts = posts => ({
  type: postsTypes.SET_POSTS,
  payload: posts
});

export const deletePostStart = postID => ({
  type: postsTypes.DELETE_POST_START,
  payload: postID
});

export const fetchPostStart = postID => ({
  type: postsTypes.FETCH_POST_START,
  payload: postID
});

export const setPost = post => ({
  type: postsTypes.SET_POST,
  payload: post
});