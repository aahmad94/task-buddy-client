import axios from 'axios';
import { BASE_URL } from './proxy';

export const postUser = (user) => (
  axios.post(BASE_URL + '/api/users', {
    user: user
  })
);


export const postSession = (user) => (
  axios.post(BASE_URL + '/api/session', {
    user: user
  })
);

export const deleteSession = () => (
  axios.delete(BASE_URL + '/api/session')
);
