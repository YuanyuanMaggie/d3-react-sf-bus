import React, { Component } from 'react'
import { connect } from 'react-redux'
import { get } from 'lodash'
import Checkbox from '../components/Checkbox'
import { updateRoute } from '../reducers/actions'

class Panel extends Component {

    render() {
        return(
            <div className="panel">
                { this.props.routesList.map((route,i) => (
                    <Checkbox key={`checkbox-${route.tag}`} 
                        tag={route.tag} 
                        title={route.title} 
                        updateRoute={this.props.updateRoute}
                        currentRoutes={this.props.currentRoutes}
                    />
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    routesList: get(state, 'routesList', []),
    currentRoutes: get(state, 'currentRoutes', []),
})

const mapDispatchToProps = {
    updateRoute
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel);