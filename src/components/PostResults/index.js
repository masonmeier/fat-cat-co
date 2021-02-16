import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchPostsStart } from '../../redux/Posts/posts.actions';
import Post from './Post';
import FormSelect from './../forms/FormSelect';
import LoadMore from './../LoadMore';
import './styles.scss';
import Particles from 'react-particles-js';
import Background from '../../assets/images/directory/roman-logo.jpg';

const mapState = ({ postsData }) => ({
  posts: postsData.posts
});

const PostResults = ({ }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { filterType } = useParams();
  const { posts } = useSelector(mapState);

  const styles = {
    pageHeader: {
      backgroundImage: `url(${Background})`
    },
  }

  const { data, queryDoc, isLastPage } = posts;

  useEffect(() => {
    dispatch(
      fetchPostsStart({ filterType })
    )
  }, [filterType]);

  const handleFilter = (e) => {
    const nextFilter = e.target.value;
    history.push(`/blog/${nextFilter}`);
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
      name: 'Announcements',
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
    <div className="posts"
         style={styles.pageHeader}>
      <FormSelect {...configFilters} />
      <div className="row">
      <h1 className="diskoteque">Blog</h1>
      </div>
      <div className="postResults"
      >
        {data.map((post, pos) => {
          const { postThumbnail, postName, cleanedPostDesc } = post;
          if (!postThumbnail || !postName ||
            typeof cleanedPostDesc === 'undefined') return null;

          const configPost = {
            ...post
          };

          return (
            <div>
                  <Particles
                    params={{
                      particles: {
                        number: {
                          value: 400,
                          density: {
                            enable: true,
                            value_area: 1000
                          }
                        },
                        color: {
                          value: '#fff'
                        },
                        opacity: {
                          value: 0.5,
                          anim: {
                            enable: true
                          }
                        },
                        size: {
                          value: 7,
                          random: true,
                          anim: {
                            enable: true,
                            speed: 3
                          }
                        },
                        line_linked: {
                          enable: false
                        },
                        move: {
                          speed: 0.2
                        }
                    },
                      "interactivity": {
                        "detect_on": "window",
                        "events": {
                          "onhover": {
                            "enable": true,
                            "mode": "attract"
                          },
                        }
                      }
                    }}
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      left: '0',
                      // top: '0',
                  }} />
                  <Post {...configPost} />
            </div>
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