const TimeConversions = (from, to, value) => {
    return convertSecondsToOther(to, convertTimeToSeconds(from, value))
}

const convertTimeToSeconds = (from, value) => {
    var toSeconds = 0;

    var conversions = {
        'Second': function () {
            toSeconds = Number(value).toFixed(3);
        },
        'Minute': function () {
            toSeconds = Number(value * 60).toFixed(3);
        },
        'Hour': function () {
            toSeconds = Number(value * 3600).toFixed(3);
        },
        'Day': function () {
            toSeconds = Number(value * 86400).toFixed(3);
        },
        'Week': function () {
            toSeconds = Number(value * 604800).toFixed(3);
        },
        'Month': function () {
            toSeconds = Number(value * 2419200).toFixed(3);
        },
        'Year': function () {
            toSeconds = Number(value * 29030400).toFixed(3);
        },
        'Default': function () {
            toSeconds = 0;
        }
    };

    (conversions[from] || conversions['Default'])();
    return toSeconds;
}
const convertSecondsToOther = (to, value) => {
    var fromSeconds = 0;

    var convertedFromSeconds = {
        'Second': function () {
            fromSeconds = Number(value).toFixed(3);
        },
        'Minute': function () {
            fromSeconds = Number(value / 60).toFixed(3);
        },
        'Hour': function () {
            fromSeconds = Number(value / 3600).toFixed(3);
        },
        'Day': function () {
            fromSeconds = Number(value / 86400).toFixed(3);
        },
        'Week': function () {
            fromSeconds = Number(value / 604800).toFixed(3);
        },
        'Month': function () {
            fromSeconds = Number(value / 2419200).toFixed(3);
        },
        'Year': function () {
            fromSeconds = Number(value / 29030400).toFixed(3);
        },
        'Default': function () {
            fromSeconds = 0;
        }
    };

    (convertedFromSeconds[to] || convertedFromSeconds['Default'])();
    return Number(fromSeconds).toFixed(3);
}


export default TimeConversions