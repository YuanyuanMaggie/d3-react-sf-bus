import React, { Component } from "react"
import { get } from "axios"
import { geoPath } from "d3-geo"
import { interpolateSpectral } from 'd3-scale-chromatic'
import { projectionFunc } from '../helpers'

class Streets extends Component {
    constructor() {
        super()
        this.state = {
          geographyPaths: [],
        }
    }
    
    componentDidMount() {
        this.loadPaths()
    }

    loadPaths = () => {
        get("/data/streets.json")
            .then(res => {
            if (res.status !== 200) return;
            const geographyPaths = res.data.features;
            this.setState({ geographyPaths })
            })
    }

    render() {
        return(
            <g className="streets">
            {
                this.state.geographyPaths.map((d,i) => {
                return (
                <path
                    key={ `path-${ i }` }
                    d={ geoPath().projection(projectionFunc(800, 450))(d) }
                    className="street"
                    fill={ `rgba(38,50,56,${1 / this.state.geographyPaths.length * i})` }
                    // fill={ interpolateSpectral(1 / this.state.geographyPaths.length * i) }
                    stroke={ interpolateSpectral(1 / this.state.geographyPaths.length * i) }
                    strokeWidth={ 0.5 }
                />
                )})
            }
            </g>
        )
    }
}

export default Streets;