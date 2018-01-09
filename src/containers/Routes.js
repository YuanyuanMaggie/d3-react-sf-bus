import React from "react"
import { connect } from 'react-redux'
import { get } from 'lodash'
import Route from './Route'
import { updateCache } from '../reducers/actions'

const Routes = (props) => (
    <g>
        { props.currentRoutes.map((route, i)=>{
            const cacheRoute = props.cacheRoutes[route] || null
            return (
            <Route key={`route-${i}`} route={route} updateCache={props.updateCache} cacheRoute={cacheRoute}/>
        )})}
    </g>
)

const mapStateToProps = (state) => ({
    currentRoutes: get(state, 'currentRoutes', []),
    cacheRoutes: get(state, 'chacheRoutes', {})
})

const mapDispatchToProps = {
    updateCache
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);