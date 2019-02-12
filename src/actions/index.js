import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';
export const UPDATE_POST = 'update_post';
export const FETCH_MESSAGES = 'fetch_messages';


export function fetchPosts() {
  const request = axios.get(`http://localhost:8000/posts`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchMessages() {
  const request = axios.get(`http://localhost:8000/requests`,{headers:{token:localStorage.getItem('token')}});
  return {
    type: FETCH_MESSAGES,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios.post(`http://localhost:8000/posts`, values, {headers:{token:localStorage.getItem('token')}}).then(()=> callback());
  return {
    type: CREATE_POST,
    payload: request
  };
}


export function fetchPost(id) {
  const request = axios.get(`http://localhost:8000/posts/${id}`);
  return {
    type: FETCH_POST,
    payload: request
  };
}

export function updatePost(id, updatedPost) {
  const request = axios.post(`http://localhost:8000/posts/${id}`, updatedPost, {headers:{token:localStorage.getItem('token')}});
  return {
    type: UPDATE_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  const request = axios.delete(`http://localhost:8000/posts/${id}`,{headers:{token:localStorage.getItem('token')}}).then(()=> callback());
  return {
    type: DELETE_POST,
    payload: request
  };
}


export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      'http://localhost:8000/login',
      formProps
    );

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
  }
};

export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: ''
  };
};
