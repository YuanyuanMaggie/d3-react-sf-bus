export const FETCH_ROUTE_LIST = "FETCH_ROUTE_LIST"
export const UPDATE_CURRENT_ROUTES = "UPDATE_CURRENT_ROUTES"
export const UPDATE_CURRENT_ROUTE = "UPDATE_CURRENT_ROUTE"
export const UPDATE_CACHE_ROUTES = "UPDATE_CACHE_ROUTES"
export const UPDATE_DETAILS = "UPDATE_DETAILS"

export const updateCache = (routeFeature) => ({
    type: UPDATE_CACHE_ROUTES,
    payload: routeFeature
})

export const fetchRoutes = (routes) => ({
    type: FETCH_ROUTE_LIST,
    payload: routes
})

export const updateRoutes = (route) => ({
    type: UPDATE_CURRENT_ROUTES,
    payload: route
})

export const updateRoute = (route) => ({
    type: UPDATE_CURRENT_ROUTE,
    payload: route
})

export const updateDetails = (details) => ({
    type: UPDATE_DETAILS,
    payload: details
})