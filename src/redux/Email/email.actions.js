import emailTypes from './email.types';

export const addEmailStart = emailData => ({
  type: emailTypes.ADD_NEW_EMAIL_START,
  payload: emailData
});

export const fetchEmailsStart = (filters={}) => ({
  type: emailTypes.FETCH_EMAILS_START,
  payload: filters
});

export const setEmails = email => ({
  type: emailTypes.SET_EMAILS,
  payload: email
});

export const deleteEmailStart = emailID => ({
  type: emailTypes.DELETE_EMAIL_START,
  payload: emailID
});

export const fetchEmailStart = emailID => ({
  type: emailTypes.FETCH_EMAIL_START,
  payload: emailID
});

export const setEmail = email => ({
  type: emailTypes.SET_EMAIL,
  payload: email
});