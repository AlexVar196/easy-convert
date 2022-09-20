import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
    return (
        <nav className="Nav">
            <ul>
                <li><Link to={process.env.PUBLIC_URL + "/units"}>Units</Link></li>
                <li><Link to={process.env.PUBLIC_URL + "/currency"}>Currency</Link></li>
            </ul>
        </nav>
    )
}

export default Nav