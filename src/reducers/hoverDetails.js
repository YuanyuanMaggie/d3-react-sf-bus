import { UPDATE_DETAILS } from './actions';

export default function(state = {} , action) {
  switch (action.type) {
    case UPDATE_DETAILS:
        return action.payload
    default:
        return state;
  }
}