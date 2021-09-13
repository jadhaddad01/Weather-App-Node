const request = require("request");

const url = 'http://api.weatherstack.com/current?access_key=4b8dea77571fe4ed721d6f17522c15b7&query=37.8267,-122.4233&units=m';

request({ url: url, json: true }, (error, response) => {
    const data = response.body.current;
    console.log(data.weather_descriptions[0]);
    console.log('It is currently ' + data.temperature + ' degrees out. It feels like ' + data.feelslike + ' degrees out');
});

const url1 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZ29tb2dpczgzOCIsImEiOiJja3Rpcnc0dWkxNTJ0Mm5tcHdrN2x3eGJjIn0.9S7zbuSe1LyE0Z_WMBcEpw&limit=1';

request({ url: url1, json: true }, (error, response) => {
    const data = response.body.features[0];
    console.log(data.text + "'s lattitude is " + data.center[0] + ' and its longitude is ' + data.center[1]);
});