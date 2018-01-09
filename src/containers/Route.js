import React, { Component } from "react"
import { get } from "axios"
import _ from "lodash"
import { feature } from 'topojson-client'
import Color from 'color'
import { generatePathFuc, routeConfigFunc } from '../helpers'
import Vehicles from './Vehicles'
class Route extends Component {
    constructor() {
        super()
        this.state = {
          geographyPaths: [],
          color: "#000",
          showVehicle: true,
          strokeWidth: 0.5,
          size: "20px"
        }
    }
    
    componentDidMount() {
        this.loadPaths()
    }

    loadPaths = () => {
        if (this.props.cacheRoute) {
            const cacheRoute = this.props.cacheRoute
            this.setState({ geographyPaths: cacheRoute.geographyPaths, color: cacheRoute.color })
        } else {
            get(routeConfigFunc(this.props.route))
            .then(res => {
                if (res.status !== 200) return
                const stops =  _.get(res, 'data.route.stop')
                const color = _.get(res, 'data.route.color')
                if (!stops || !color) return
                const featureStops = _.map(stops, stop => this.parseStop(stop))
                const geographyPaths = featureStops
                this.setState({ geographyPaths, color: `#${color}` })
                const cache = {}
                cache[this.props.route] = { geographyPaths, color: `#${color}` }
                this.props.updateCache(cache)
            })
        }
    }

    parseStop = (stop) => {
        const stopObject = {
            type:"Point", 
            properties:{title:stop.title}, 
            coordinates:[stop.lon/1, stop.lat/1, 0]
        }
        return feature({type: "Topology", objects: stopObject}, stopObject);
    }

    toggleVehicle = () => {
        this.setState({
            showVehicle: !this.state.showVehicle
        })
    }

    handleMouseOver= () => {
        this.setState({
            strokeWidth: 10,
            size: "30px"
        })
    }

    handleMouseOut= () => {
        // debounce
        setTimeout(()=>{
            this.setState({
                strokeWidth: 0.5,
                size: "20px",
            })
            }, 300
        )
    }

    render() {
        return(
            <g className="route" 
            onClick={this.toggleVehicle} 
            onMouseOver = { this.handleMouseOver }
            onMouseOut = { this.handleMouseOut }>
            {
                this.state.geographyPaths.map((d,i) => {
                const curColor = this.state.showVehicle ? this.state.color : Color(this.state.color).alpha(0.3).lighten(0.5);
                return (
                    <path
                        key={ `path-${ i }` }
                        d={ generatePathFuc()(d) }
                        className="routeStop"
                        fill={ curColor }
                        stroke={ curColor }
                        strokeWidth={ this.state.strokeWidth }
                    />
                )
            })
            }
            { this.state.showVehicle && <Vehicles route={this.props.route} color={this.state.color} size={this.state.size} />}
            </g>
        )
    }
}

export default Route;