import React from 'react'
import { useParams } from 'react-router-dom';

const UnitPick = ({ unitList, value, handleValueChange, handleConversionChange, calculateConversion, pickedConversion }) => {
    const { unitName } = useParams();
    const unit = unitList.find(unit => (unit.unitName).toString() === unitName);
    const bgColor = { backgroundColor: 'orange' }

    return (

        <div className="UnitPick">
            <h2>{unit.unitName}</h2>
            <div className='convertionsMenu'>
                {unit.conversions.map(conversion => (
                    <button
                        style={
                            conversion === pickedConversion
                                ? bgColor
                                : null
                        }
                        key={conversion}
                        onClick={() => handleConversionChange(conversion)}> {conversion}</button>
                ))}
            </div>

            <form onSubmit={(e) => e.preventDefault}>
                <input
                    id="pickedValue"
                    type="number"
                    placeholder="Input Value"
                    value={value}
                    onChange={(e) => { handleValueChange(e.target.value) }}
                />
            </form>

            <div className='dataTableContainer'>
                <table className='conversionResultsTable'>
                    <tbody>
                        {unit.conversions.map(conversion => (
                            <tr key={conversion}>
                                <td>
                                    <div className='data'>
                                        {conversion}
                                    </div>
                                </td>
                                <td>
                                    <div className='data'>
                                        {calculateConversion(conversion)}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >

    )
}

export default UnitPick