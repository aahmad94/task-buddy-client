import axios from 'axios';
import { BASE_URL, AUTH_HEADER } from './proxy';

export const postUser = (user) => (
  axios.post(BASE_URL + '/api/users', {
    user: user
  }, AUTH_HEADER)
);


export const postSession = (user) => (
  axios.post(BASE_URL + '/api/session', {
    user: user
  }, AUTH_HEADER)
);

export const deleteSession = () => (
  axios.delete(BASE_URL + '/api/session', AUTH_HEADER)
);
