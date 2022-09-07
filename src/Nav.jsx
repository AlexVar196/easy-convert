import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="Nav">
            <ul>
                <li><Link to="/">Units</Link></li>
                <li><Link to="/currency">Currency</Link></li>
            </ul>
        </nav>
    )
}

export default Nav