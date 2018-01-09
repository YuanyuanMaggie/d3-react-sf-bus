import { combineReducers } from 'redux';
import routesList from './routesList';
import currentRoutes from './currentRoutes';
import cacheRoutes from "./cacheRoutes";
export default combineReducers({
    routesList,
    currentRoutes,
    cacheRoutes,
})