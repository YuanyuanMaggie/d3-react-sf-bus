import React, { Component } from "react"

class Path extends Component {
    constructor(){
        super()
        this.state = {
            strokeWidth: 0.5,
        }
    }

    render() {
        return(
            <path
                d={ this.props.d }
                className={ this.props.cusClass }
                fill={ this.props.fill }
                stroke={ this.props.stroke }
                strokeWidth= { this.props.strokeWidth }
            />    
        )
    }
}

export default Path;