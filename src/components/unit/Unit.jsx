import React from 'react';
import { Link } from 'react-router-dom';
import './Unit.scss';

const Unit = ({ unit, setUnitGroup, setPickedValue }) => {

    return (
        <Link to={`${process.env.PUBLIC_URL}/units/${unit.unitGroup}`}>
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

