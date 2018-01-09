import { FETCH_ROUTE_LIST } from './actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ROUTE_LIST:
        return action.payload ;
    default:
        return state;
  }
}