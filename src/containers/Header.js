import React from 'react'

const Header = () => (
    <nav>
        <div className="nav-wrapper container">
            <a href="#app" className="brand-logo">NextBus RealTime App</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#vehicles">Control Panels</a></li>
                <li><a href="#routes">Details</a></li>
            </ul>
        </div>
    </nav>
)

export default Header;