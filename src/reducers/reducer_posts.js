import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST, FETCH_MESSAGES } from '../actions'

export default function(state = [], action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload);
    case FETCH_POST:
      return [ action.payload.data] ;
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_MESSAGES:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
