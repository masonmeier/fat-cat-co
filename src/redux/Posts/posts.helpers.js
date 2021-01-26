import { firestore } from '../../firebase/utils';

export const handleAddPost = post => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('posts')
      .doc()
      .set(post)
      .then(() => {
        resolve();
      })
      .catch(err => {
        reject(err);
      })
  });
}

export const handleFetchPosts = ({ filterType, startAfterDoc, persistPosts=[] }) => {
  return new Promise((resolve, reject) => {
    const pageSize = 6;

    let ref = firestore.collection('posts').orderBy('createdDate').limit(pageSize);

    if (filterType) ref = ref.where('postCategory', '==', filterType);
    if (startAfterDoc) ref = ref.startAfter(startAfterDoc);

    ref
      .get()
      .then(snapshot => {
        const totalCount = snapshot.size;

        const data = [
          ...persistPosts,
          ...snapshot.docs.map(doc => {
            return {
              ...doc.data(),
              documentID: doc.id
            }
          })
        ];

        resolve({
          data,
          queryDoc: snapshot.docs[totalCount - 1],
          isLastPage: totalCount < 1
        });
      })
      .catch(err => {
        reject(err);
      })
  })
}

export const handleDeletePost = documentID => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('posts')
      .doc(documentID)
      .delete()
      .then(() => {
        console.log(documentID, 2)
        resolve();
      })
      .catch(err => {
        reject(err);
      })
  });
}

export const handleFetchPost = (postID) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('posts')
      .doc(postID)
      .get()
      .then(snapshot => {

        if (snapshot.exists) {
          resolve(
            snapshot.data()
          );
        }
      })
      .catch(err => {
        reject(err);
      })
  })
}