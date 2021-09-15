const request = require("request")

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
        + encodeURIComponent(address) // ? becomes %3F
        + '.json?access_token=pk.eyJ1IjoiZ29tb2dpczgzOCIsImEiOiJja3Rpcnc0dWkxNTJ0Mm5tcHdrN2x3eGJjIn0.9S7zbuSe1LyE0Z_WMBcEpw&limit=1';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (body.features.length == 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode