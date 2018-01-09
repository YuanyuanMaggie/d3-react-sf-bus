import React, { Component } from "react"
import { get } from "axios"
import _ from "lodash"
import { feature } from 'topojson-client'
import { generatePathFuc, vehicleLocFunc } from '../helpers'
import Bus from '../components/Bus'

class Vehicles extends Component {
    constructor() {
        super()
        this.state = {
          geographyPaths: [],
        }
    }
    
    componentDidMount() {
        this.loadPaths()
        this.timer = setInterval(this.loadPaths.bind(this), 15000)
    }

    componentWillUnmount () {
        clearInterval(this.timer)
    }

    loadPaths = () => {
        const CurrentTime = new Date().getTime() - 1000 * 60; // get 1min before
        const Link = vehicleLocFunc(this.props.route, CurrentTime)
        get(Link)
            .then(res => {
                if (res.status !== 200) return;
                const vehicles =  _.get(res, 'data.vehicle');
                if(!vehicles || !_.isArray(vehicles)) return;
                const predictableVehicles = vehicles.filter(vehicle => vehicle.predictable === "true")
                const featureVehicle = _.map(predictableVehicles, vehicle => this.parseVehicle(vehicle));
                const geographyPaths = featureVehicle;
                this.setState({ geographyPaths })
            })
    }

    parseVehicle = (vehicle) => {
        const vehicleObject = {
            type:"Point", 
            properties:{heading:vehicle.heading}, 
            coordinates:[vehicle.lon/1, vehicle.lat/1, 0]
        }
        return feature({type: "Topology", objects: vehicleObject}, vehicleObject);
    }

    render() {
        return(
            <g className="vehicles">
            {
                this.state.geographyPaths.map((d,i) => (
                <g key={i} transform={`translate(${generatePathFuc().centroid(d)})`}>
                    <Bus fill={this.props.color} size={this.props.size} />
                </g>
                ))
            }
            </g>
        )
    }
}

export default Vehicles;