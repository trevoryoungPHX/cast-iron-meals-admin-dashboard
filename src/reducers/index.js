import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import PostsReducer from './reducer_posts'


export default combineReducers({
  auth,
  posts: PostsReducer,
  form: formReducer
});
