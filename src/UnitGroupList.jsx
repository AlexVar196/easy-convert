import React from 'react'
import Unit from './Unit'

const UnitGroupList = ({ unitGroupList, setUnitGroup }) => {
  return (
    <div className='UnitList'>
      {unitGroupList.map(unit => (
        <Unit key={unit.unitGroup} unit={unit} setUnitGroup={setUnitGroup} />
      ))}
    </div>
  )
}

export default UnitGroupList