import React, { Component } from "react"
import { get } from 'axios'
import { connect } from 'react-redux'
import _ from 'lodash'
import { routeListURL } from '../helpers'
import { fetchRoutes, updateRoutes } from '../actions'
import Header from '../components/Header'
import Map from "../components/Map"
import Panel from "./Panel"

class Dashboard extends Component {
    componentDidMount() {
        // init with 5 routes
        get(routeListURL)
            .then(res => {
                if (res.status !== 200) return;
                const routes = _.get(res, 'data.route')
                if (routes){
                    this.props.fetchRoutes(routes)
                    const first5Routes = _.map(_.take(routes, 5), route => (route.tag))
                    this.props.updateRoutes(first5Routes)
                }
            })
    }

    render() {
        return(
            <div className="dashboard">
                <Header />
                <Map/>
                <Panel/>
            </div>
        )
    }
}

const mapDispatchToProps = {
    fetchRoutes,
    updateRoutes
}

export default connect(null, mapDispatchToProps)(Dashboard)