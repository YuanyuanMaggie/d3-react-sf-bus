import React from 'react'

const Details = ({hoverDetails})=> {
    const styleColor = hoverDetails.color || "#ccc"
    return (
    <div className="hover-details">
        {
            !hoverDetails.type && <p >
                Hover on Route or Vehicle to see detail info here
            </p>
        }
        {
            hoverDetails.type && <div style={{"color": styleColor}}>
                <p><strong>Type: </strong> { hoverDetails.type } </p>
                <p><strong>Route: </strong> { hoverDetails.route } </p>
                <p><strong>Bus Tag: </strong> { hoverDetails.busTag } </p>
                <p><strong>Stop Name: </strong> { hoverDetails.stopName } </p>
                <p><strong>Color: </strong>{ hoverDetails.color }</p>
            </div>
        }
    </div>
)}

export default Details;