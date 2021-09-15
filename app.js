const request = require("request");
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const input = process.argv
if (input.length != 3) { // 2 = no inputs more than 3 = more than 1 input
    console.log('Please input one location');
    process.exit() // quit
}

// else run program
geocode(input[2], (error, { latitude, longitude, location } = {}) => { // default {} undefined if error
    if (error) {
        return console.log(error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return console.log(error);
        }

        console.log(location);
        console.log('Data', forecastData);

    })


})
