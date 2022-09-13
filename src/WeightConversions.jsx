const WeightConversions = (from, to, value) => {
    return convertGramsToOther(to, convertWeightToGrams(from, value))
}

const convertWeightToGrams = (from, value) => {
    var toGram = 0;
    //'Gram', 'Kilogram', 'Miligram', 'Ounce', 'Pound', 'Ton'
    var conversions = {
        'Gram': function () {
            toGram = Number(value).toFixed(3);
        },
        'Kilogram': function () {
            toGram = Number(value * 1000).toFixed(3);
        },
        'Ton': function () {
            toGram = Number(value * 1000000).toFixed(3);
        },
        'Miligram': function () {
            toGram = Number(value / 100).toFixed(3);
        },
        'Ounce': function () {
            toGram = Number(value * 0.035274).toFixed(3);
        },
        'Pound': function () {
            toGram = Number(value * 0.0022046).toFixed(3);
        },
        'Default': function () {
            toGram = 0;
        }
    };

    (conversions[from] || conversions['Default'])();
    return toGram;
}
const convertGramsToOther = (to, value) => {
    var fromGram = 0;

    var convertedFromGram = {
        'Gram': function () {
            fromGram = Number(value).toFixed(3);
        },
        'Kilogram': function () {
            fromGram = Number(value / 1000).toFixed(3);
        },
        'Ton': function () {
            fromGram = Number(value / 1000000).toFixed(3);
        },
        'Miligram': function () {
            fromGram = Number(value * 100).toFixed(3);
        },
        'Ounce': function () {
            fromGram = Number(value / 0.035274).toFixed(3);
        },
        'Pound': function () {
            fromGram = Number(value / 0.0022046).toFixed(3);
        },
        'Default': function () {
            fromGram = 0;
        }
    };

    (convertedFromGram[to] || convertedFromGram['Default'])();
    return Number(fromGram).toFixed(3);
}

export default WeightConversions