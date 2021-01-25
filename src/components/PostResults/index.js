import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchPostsStart } from '../../redux/Posts/posts.actions';
import Post from './Post';
import FormSelect from './../forms/FormSelect';
import LoadMore from './../LoadMore';
import './styles.scss';

const mapState = ({ postsData }) => ({
  posts: postsData.posts
});

const PostResults = ({ }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { filterType } = useParams();
  const { posts } = useSelector(mapState);

  const { data, queryDoc, isLastPage } = posts;

  useEffect(() => {
    dispatch(
      fetchPostsStart({ filterType })
    )
  }, [filterType]);

  const handleFilter = (e) => {
    const nextFilter = e.target.value;
    history.push(`/search/${nextFilter}`);
  };

  if (!Array.isArray(data)) return null;
  if (data.length < 1) {
    return (
      <div className="posts">
        <p>
          No search results.
        </p>
      </div>
    );
  }

  const configFilters = {
    defaultValue: filterType,
    options: [{
      name: 'Show all',
      value: ''
    }, {
      name: 'General',
      value: 'general'
    }, {
      name: 'Announcement',
      value: 'announcement'
    }],
    handleChange: handleFilter
  };

  const handleLoadMore = () => {
    dispatch(
      fetchPostsStart({
        filterType,
        startAfterDoc: queryDoc,
        persistPosts: data
      })
    )
  };

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };

  return (
    <div className="posts">

      <h1>
        Browse Posts
      </h1>

      <FormSelect {...configFilters} />

      <div className="postResults">
        {data.map((post, pos) => {
          const { postThumbnail, postName, postPrice } = post;
          if (!postThumbnail || !postName ||
            typeof postPrice === 'undefined') return null;

          const configPost = {
            ...post
          };

          return (
            <Post key={pos} {...configPost} />
          );
        })}
      </div>

      {!isLastPage && (
        <LoadMore {...configLoadMore} />
      )}

    </div>
  );
};

export default PostResults;