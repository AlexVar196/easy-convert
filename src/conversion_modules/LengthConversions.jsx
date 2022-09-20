
const LengthConversions = (from, to, value) => {
    return convertMeterToOther(to, convertLengthToMeter(from, value))
}

const convertLengthToMeter = (from, value) => {
    var toMeters = 0;

    var conversions = {
        'Meter': function () {
            toMeters = Number(value).toFixed(3);
        },
        'Kilometer': function () {
            toMeters = value * 1000;
        },
        'Centimeter': function () {
            toMeters = value / 100;
        },
        'Milimeter': function () {
            toMeters = value / 1000;
        },
        'Inch': function () {
            toMeters = value / 39.370;
        },
        'Feet': function () {
            toMeters = value / 3.2808;
        },
        'Mile': function () {
            toMeters = value / 0.00062137;
        },
        'Default': function () {
            toMeters = 0;
        }
    };

    (conversions[from] || conversions['Default'])();
    return toMeters;
}
const convertMeterToOther = (to, value) => {
    var fromMeters = 0;

    var convertedFromMeters = {
        'Meter': function () {
            fromMeters = Number(value).toFixed(3);
        },
        'Kilometer': function () {
            fromMeters = Number(value / 1000).toFixed(3);
        },
        'Centimeter': function () {
            fromMeters = Number(value * 100).toFixed(2);
        },
        'Milimeter': function () {
            fromMeters = Number(value * 1000).toFixed(1);
        },
        'Inch': function () {
            fromMeters = Number(value * 39.370).toFixed(2);
        },
        'Feet': function () {
            fromMeters = Number(value * 3.2808).toFixed(2);
        },
        'Mile': function () {
            fromMeters = Number(value * 0.00062137).toFixed(3);
        },
        'Default': function () {
            fromMeters = 0;
        }
    };

    (convertedFromMeters[to] || convertedFromMeters['Default'])();

    return fromMeters;
}

export default LengthConversions