const request = require("request")

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4b8dea77571fe4ed721d6f17522c15b7&query='
        + encodeURIComponent(latitude)
        + ','
        + encodeURIComponent(longitude)
        + '&units=m';

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                temperature: response.body.current.temperature,
                feel: response.body.current.feelslike
            })
        }
    })
}

module.exports = forecast