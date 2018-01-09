import React, { Component } from 'react'
import { connect } from 'react-redux'
import { get } from 'lodash'
import Checkbox from '../components/Checkbox'

class Panel extends Component {

    render() {
        return(
            <div className="panel">
                { this.props.routesList.map((route,i) => (
                    <Checkbox key={`checkbox-${route.tag}`} tag={route.tag} title={route.title} />
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    routesList: get(state, 'routesList', []),
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel);