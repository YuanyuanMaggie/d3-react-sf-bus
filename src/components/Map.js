import React, { Component } from "react"
import Streets from './Streets'
import Routes from '../containers/Routes'

class Map extends Component {

    render() {
        return(
            <div className="map">
                <svg width={ 800 } height={ 600 } viewBox="0 0 800 450">
                    <Streets/>
                    <Routes/>
                </svg>
            </div>
        )
    }
}

export default Map;