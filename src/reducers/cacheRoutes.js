import { UPDATE_CACHE_ROUTES } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case UPDATE_CACHE_ROUTES:
        return {...state, ...action.payload}
    default:
        return state;
  }
}