import React from 'react'
import { Link } from 'react-router-dom'

const Unit = ({ unit, setUnitGroup }) => {

    return (
        <Link to={`/unit/${unit.unitGroup}`}>
            <button className='unit' onClick={() => {
                setUnitGroup(unit.unitGroup); 
                console.log('group changed to:' + unit.unitGroup);
            }}>
                {unit.unitGroup}
            </button>
        </Link>

    )
}

export default Unit