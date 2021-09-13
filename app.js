const request = require("request");

const url = 'http://api.weatherstack.com/current?access_key=4b8dea77571fe4ed721d6f17522c15b7&query=37.8267,-122.4233&units=m';

request({ url: url, json: true }, (error, response) => {
    const data = response.body.current;
    console.log(data.weather_descriptions[0]);
    console.log('It is currently ' + data.temperature + ' degrees out. It feels like ' + data.feelslike + ' degrees out');
});