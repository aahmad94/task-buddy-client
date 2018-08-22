import axios from 'axios';
import { BASE_URL } from './proxy';
export const postTask = (task) => (
  axios.post(BASE_URL + "/api/tasks", {
    task: task
  })
);

export const getTasks = (tasks) => (
  axios.get(BASE_URL + "/api/tasks")
);