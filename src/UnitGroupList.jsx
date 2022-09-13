import React from 'react'
import Unit from './Unit'

const UnitGroupList = ({ unitGroupList, setUnitGroup, setPickedValue }) => {
  return (
    <div className='UnitList'>
      {unitGroupList.map(unit => (
        <Unit key={unit.unitGroup} unit={unit} setUnitGroup={setUnitGroup} setPickedValue={setPickedValue} />
      ))}
    </div>
  )
}

export default UnitGroupList