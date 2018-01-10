import { UPDATE_CURRENT_ROUTES, UPDATE_CURRENT_ROUTE } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case UPDATE_CURRENT_ROUTE:
        const pos = state.indexOf(action.payload)
        if(pos > -1) {
          return [...state.slice(0,pos),...state.splice(pos+1)]
        } 
        return [...state, action.payload]
    case UPDATE_CURRENT_ROUTES:
        return action.payload
    default:
        return state;
  }
}