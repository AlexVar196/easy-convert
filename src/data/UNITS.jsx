
const UNITS = () => {
    return (
        [
            {
                unitGroup: "Length",
                conversions: ['Meter', 'Kilometer', 'Centimeter', 'Milimeter', 'Inch', 'Feet', 'Mile']
            },
            {
                unitGroup: "Temperature",
                conversions: ['Celsius', 'Kelvin', 'Fahrenheit']
            },
            {
                unitGroup: "Weight",
                conversions: ['Gram', 'Kilogram', 'Miligram', 'Ounce', 'Pound', 'Ton']
            },
            {
                unitGroup: "Time",
                conversions: ['Second', 'Minute', 'Hour', 'Day', 'Week', 'Month', 'Year']
            }
        ]
    )
}

export default UNITS
