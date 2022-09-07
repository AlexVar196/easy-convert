import React from 'react'
import { Link } from 'react-router-dom'

const Unit = ({ unit }) => {
    return (
        <Link to={`/unit/${unit.unitName}`}>
            <div className='unit'>
                {unit.unitName}
            </div>
        </Link>

    )
}

export default Unit