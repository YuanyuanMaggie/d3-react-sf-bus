import React, { Component } from 'react'
import { connect } from 'react-redux'
import { get } from 'lodash'
import Checkbox from '../components/Checkbox'
import Details from '../components/Details'
import { updateRoute } from '../reducers/actions'

class Panel extends Component {
    render() {
        let detailActive = false
        if (this.props.hoverDetails.type) {
            detailActive = true
        }
        const panelClass = detailActive? 'panel detail': 'panel'
        return(
            <div className={panelClass}>
                { detailActive
                    ? <Details hoverDetails={this.props.hoverDetails} />
                    : this.props.routesList.map((route,i) => (
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
    hoverDetails: get(state, 'hoverDetails', {})
})

const mapDispatchToProps = {
    updateRoute
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel);