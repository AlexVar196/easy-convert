import React from 'react'
import { Link } from 'react-router-dom'

const Unit = ({ unit, setUnitGroup, setPickedValue }) => {

    return (
        <Link to={`/unit/${unit.unitGroup}`}>
            <button className='unit' onClick={() => {
                setPickedValue(0);
                setUnitGroup(unit.unitGroup);
            }}>
                {unit.unitGroup.toUpperCase()}
            </button>
        </Link>

    )
}

export default Unit