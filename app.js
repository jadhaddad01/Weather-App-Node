const request = require("request");
const geocode = require('./utils/geocode')

// const url = 'http://api.weatherstack.com/current?access_key=4b8dea77571fe4ed721d6f17522c15b7&query=37.8267,-122.4233&units=m';

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service');
//     }
//     else if (response.body.error) {
//         console.log('Unable to find location');
//     }
//     else {
//         const data = response.body.current;
//         console.log(data.weather_descriptions[0]);
//         console.log('It is currently ' + data.temperature + ' degrees out. It feels like ' + data.feelslike + ' degrees out');
//     }

// });

// const url1 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZ29tb2dpczgzOCIsImEiOiJja3Rpcnc0dWkxNTJ0Mm5tcHdrN2x3eGJjIn0.9S7zbuSe1LyE0Z_WMBcEpw&limit=1';

// request({ url: url1, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to coordinates service');
//     }
//     else if (response.body.features.length == 0) {
//         console.log('Unable to find location');
//     }
//     else {
//         const location = response.body.features[0].text;
//         const lattitude = response.body.features[0].center[1];
//         const longitude = response.body.features[0].center[0];
//         console.log(location + "'s lattitude is " + lattitude + ' and its longitude is ' + longitude);
//     }
// });

geocode('boston', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
})