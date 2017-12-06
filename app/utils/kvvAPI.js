const https = require('https');
const Stop = require('./stop');

var apiKey = '?key=377d840e54b59adbe53608ba1aad70e8';
var baseUrl = 'https://live.kvv.de/webapp/';

var assembleUrl = function (customUrlPart) {
    return baseUrl + customUrlPart + apiKey;
};

module.exports = {
    'searchStopsByName': function (stopName, callback) {
        https.get(assembleUrl('stops/byname/' + stopName), (res) => {
            var data = '';
            // HTTP status response != 200 -> KVV API returned error, e.g. invalid URL parameter
            if (res.statusCode != 200) {
                var error = new Error(res.statusMessage)
                error.code = res.statusCode;
                callback(data, error);
            }
            res.on('data', (d) => {
                data += d;
            });
            res.on('end', (res) => {
                callback(data, null);
            });
        }).on('error', (e) => {
            // invalid DNS address
            callback(null, e);
        });
    },
    'departuresByStop': function (stopID, callback) {
        https.get(assembleUrl('departures/bystop/' + stopID), (res) => {
            var data = '';
            // HTTP status response != 200 -> KVV API returned error, e.g. invalid URL parameter
            if (res.statusCode != 200) {
                var error = new Error(res.statusMessage)
                error.code = res.statusCode;
                callback(data, error);
            }
            res.on('data', (d) => {
                data += d;
            });
            res.on('end', (res) => {
                callback(data, null);
            });
        }).on('error', (e) => {
            // invalid DNS address
            callback(null, e);
        });
    },
};