import React, { Component } from "react"
import { generatePathFuc } from '../helpers'

class BusStop extends Component {

    handleMouseOver = (d) => {
        const details = {
            type: "Stop Details", 
            route: this.props.route, 
            busTag: null,
            stopName: d.properties.title, 
            color:this.props.color || null
        }
        if(this.props.updateDetails) {
            this.props.updateDetails(details)
        }
    }

    handleMouseOut = () => {
        this.props.updateDetails({})
    }

    render() {
        return (
            <path
                d={ generatePathFuc()(this.props.d) }
                className="routeStop"
                fill={ this.props.color }
                stroke={ this.props.color }
                strokeWidth={ this.props.strokeWidth }
                onMouseOver={ () => { this.handleMouseOver(this.props.d)}}
                onMouseOut={ this.handleMouseOut }
            />
        )
    }
}

export default BusStop;