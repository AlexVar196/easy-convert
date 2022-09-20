import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import './UnitPick.scss';

const UnitPick = ({
    unitGroupList,
    value,
    handleValueChange,
    handleConversionChange,
    calculateConversion,
    pickedConversion }) => {

    const { unitGroup } = useParams();
    const unit = unitGroupList.find(unit => (unit.unitGroup).toString() === unitGroup);

    if (unit === undefined || unit.unitGroup === null) {
        return <Navigate to={process.env.PUBLIC_URL + "/units"} replace={true} />
    }

    return (
        <div className="UnitPick">
            <h2>{unit.unitGroup}</h2>
            <div className='convertionsMenu'>
                {unit.conversions.map(conversion => (
                    <button
                        className={
                            conversion === pickedConversion
                                ? 'bgColor'
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
                                    <div className='data-right'>
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