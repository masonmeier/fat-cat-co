// const functions = require("firebase-functions");
//
// const admin = require('firebase-admin');
// admin.initializeApp(functions.config().firebase);
//
// const SENDGRID_API_KEY = functions.config().sendgrid.key
//
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(SENDGRID_API_KEY)
//
// exports.firestoreEmail = functions.firestore
//   .document('email/')
//   .onCreate(event => {
//     const emailId = event.params.email
//
//     const db = admin.firestore()
//
//     return db.collection('users').doc(emailId)
//       .get()
//       .then(doc => {
//         const email = doc.data()
//         const msg = {
//           to: 'ontherocksroman@gmail.com',
//           from: 'ontherockswebserver@ontherocks.com',
//           subject: 'a new email from FFRoman website!',
//
//           templateId: 'd-ae9e829f58274e09abf0ba990ff7b2b4',
//           substitutionWrappers: ['{{', '}}'],
//           substitutions: {
//             firstName: email.contactFirstName,
//             lastName: email.contactLastName,
//             subject: email.contactSubject,
//             message: email.contactMessage,
//             timeStamp: email.createdDate
//           }
//         };
//         return sgMail.send(msg)
//
//       })
//       .then(() => console.log('email sent'))
//       .catch(err => console.log(err))
//   })
