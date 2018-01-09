import React, { Component } from 'react'

class Checkbox extends Component {

    render() {
        return(
            <p>
                <input type="checkbox" className="filled-in" checked="checked" id={this.props.tag} />
                <label htmlFor={this.props.tag}>{ this.props.title } </label>
            </p>
        )
    }
}

export default Checkbox;