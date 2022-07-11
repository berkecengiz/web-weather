const request = require('postman-request')

const forecast = (latitude,longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0bbe7e9f2f235537bd368b2d7c039a66&query=' + latitude + ',' + longitude 

    request({url, json: true}, (error, {body}) =>{
       if (error) {
        callback('Unable to connect to weather services!', undefined)
       } else if (body.error) {
            callback('Unable to find location, try another search!', undefined)
       } else {
            callback(undefined, 'Today is '+ body.current.weather_descriptions[0] + '. It s currently '+ body.current.temperature + ' degress but it feels like ' + body.current.feelslike + ' degress. Humidity of the day is: ' + body.current.humidity + "%")
       }
    })
}

module.exports = forecast

