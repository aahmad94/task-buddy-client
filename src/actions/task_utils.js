import axios from 'axios';
import { BASE_URL, AUTH_HEADER } from './proxy';

export const postTask = (task) => (
  axios.post(BASE_URL + "/api/tasks", {
    task: task
  }, AUTH_HEADER)
);

export const getTasks = (tasks) => (
  axios.get(BASE_URL + "/api/tasks", {
    'headers': {
      "Authorization": localStorage.getItem("_sms_app_session")
    }
  }, AUTH_HEADER)
);