import React from 'react'
import Unit from './Unit'

const UnitList = ({ unitList }) => {
  return (
    <div className='UnitList'>
      {unitList.map(unit => (
        <Unit key={unit.unitName} unit={unit} />
      ))}
    </div>
  )
}

export default UnitList