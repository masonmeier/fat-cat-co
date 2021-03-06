import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPostStart, fetchPostsStart, deletePostStart } from '../../redux/Posts/posts.actions';
import Modal from './../../components/Modal';
import FormInput from './../../components/forms/FormInput';
import FormSelect from './../../components/forms/FormSelect';
import Button from './../../components/forms/Button';
import LoadMore from './../../components/LoadMore';
import CKEditor from 'ckeditor4-react';
import './styles.scss';

const mapState = ({ postsData }) => ({
  posts: postsData.posts
});

const Admin = props => {
  const { posts } = useSelector(mapState);
  const dispatch = useDispatch();
  const [hideModal, setHideModal] = useState(true);
  const [postCategory, setPostCategory] = useState('general');
  const [postName, setPostName] = useState('');
  const [postThumbnail, setPostThumbnail] = useState('');
  const [postDesc, setPostDesc] = useState('');

  const { data, queryDoc, isLastPage } = posts;

  useEffect(() => {
    dispatch(
      fetchPostsStart()
    );
  }, []);

  const toggleModal = () => setHideModal(!hideModal);

  const configModal = {
    hideModal,
    toggleModal
  };

  const resetForm = () => {
    setHideModal(true);
    setPostCategory('general');
    setPostName('');
    setPostThumbnail('');
    setPostDesc('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const cleanedPostDesc = postDesc.replace( /<\/?p[^>]*>/g, '');
    dispatch(
      addPostStart({
        postCategory,
        postName,
        postThumbnail,
        cleanedPostDesc,
      })
    );
    resetForm();

  };

  const handleLoadMore = () => {
    dispatch(
      fetchPostsStart({
        startAfterDoc: queryDoc,
        persistPosts: data
      })
    );
  };

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };

  return (
    <div className="admin">

      <div className="callToActions">
        <ul className="admin-nav">
          <li>
            <Button onClick={() => toggleModal()}>
              Add new post
            </Button>
          </li>
        </ul>
      </div>

      <Modal className='modal' {...configModal}>
        <div className="addNewPostForm">
          <form onSubmit={handleSubmit}>

            <h2>
              Add new post
            </h2>

            <FormSelect
              label="Category"
              options={[{
                value: "general",
                name: "General"
              }, {
                value: "announcement",
                name: "Announcement"
              }]}
              handleChange={e => setPostCategory(e.target.value)}
            />

            <FormInput
              className="form-input"
              label="Name"
              type="text"
              value={postName}
              handleChange={e => setPostName(e.target.value)}
            />

            <FormInput
              className="form-input"
              label="Main image URL"
              type="url"
              value={postThumbnail}
              handleChange={e => setPostThumbnail(e.target.value)}
            />

            <CKEditor
              onChange={evt => setPostDesc(evt.editor.getData())}
            />

            <br />

            <Button type="submit">
              Add post
            </Button>

          </form>
        </div>
      </Modal>

      <div className="managePosts">
        <h1 className="manage-posts-title">
          Manage Posts
        </h1>

        <table className="admin-table" border="0" cellPadding="0" cellSpacing="0">
          <tbody className="table-body">
          <tr>
            <td>
              <table className="results" border="0" cellPadding="10" cellSpacing="0">
                <tbody className="table-body">
                {(Array.isArray(data) && data.length > 0) && data.map((post, index) => {
                  const {
                    postName,
                    postThumbnail,
                    cleanedPostDesc,
                    documentID
                  } = post;

                  return (
                    <tr key={index}>
                      <td>
                        <img className="thumb" src={postThumbnail} />
                      </td>
                      <td>
                        {postName}
                      </td>
                      <td>
                        {cleanedPostDesc}
                      </td>
                      <td>
                        <Button onClick={() => dispatch(deletePostStart(documentID))}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  )
                })}
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td>

            </td>
          </tr>
          <tr>
            <td>
              <table border="0" cellPadding="10" cellSpacing="0">
                <tbody>
                <tr>
                  <td>
                    {!isLastPage && (
                      <LoadMore {...configLoadMore} />
                    )}
                  </td>
                </tr>
                </tbody>
              </table>
            </td>
          </tr>
          </tbody>
        </table>

      </div>

    </div>
  );
}

export default Admin;