const TempConversions = (from, to, value) => {
    return convertCelsiusToOther(to, convertTempToCelsius(from, value))
}

const convertTempToCelsius = (from, value) => {
    var toCelsius = 0;

    var conversions = {
        'Celsius': function () {
            toCelsius = Number(value).toFixed(3);
        },
        'Kelvin': function () {
            toCelsius = Number(value + 273.15).toFixed(3);
        },
        'Fahrenheit': function () {
            toCelsius = Number((value - 32) / 1.8).toFixed(3);
        },
        'Default': function () {
            toCelsius = 0;
        }
    };

    (conversions[from] || conversions['Default'])();
    return toCelsius;
}
const convertCelsiusToOther = (to, value) => {
    var fromCelsius = 0;

    var convertedFromCelsius = {
        'Celsius': function () {
            fromCelsius = Number(value).toFixed(3);
        },
        'Kelvin': function () {
            fromCelsius = Number(value - 273.15).toFixed(3);
        },
        'Fahrenheit': function () {
            fromCelsius = Number((value * 1.8) + 32).toFixed(3);
        },
        'Default': function () {
            fromCelsius = 0;
        }
    };

    (convertedFromCelsius[to] || convertedFromCelsius['Default'])();
    return Number(fromCelsius).toFixed(3);
}


export default TempConversions