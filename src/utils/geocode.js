const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=13e7ac470bc859900e971043278854f5&query=' + encodeURIComponent(address) 

    request({url, json : true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if(body.error){
            callback('Unable to find location, try another search!', undefined)
        } else {
            callback(undefined, {
                latitude : body.data[0].latitude,
                longitude : body.data[0].longitude,
                location : body.data[0].label
            })
        }
    })
}


module.exports = geocode