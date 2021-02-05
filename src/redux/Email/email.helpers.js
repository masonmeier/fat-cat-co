import { firestore } from '../../firebase/utils';

export const handleAddEmail = email => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('email')
      .doc()
      .set(email)
      .then(() => {
        resolve();
      })
      .catch(err => {
        reject(err);
      })
  });
}

export const handleDeleteEmail = documentID => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('email')
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

export const handleFetchEmail = (emailID) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('email')
      .doc(emailID)
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