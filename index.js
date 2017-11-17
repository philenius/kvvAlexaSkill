'use strict';

const Alexa = require('alexa-sdk');
const https = require('https');

function doAPIRequest(callback) {
    https.get('https://live.kvv.de/webapp/departures/bystop/de:8212:49?key=377d840e54b59adbe53608ba1aad70e8', (res) => {
        var body = '';
        res.on('data', (data) => {
            body += data;
        });
        res.on('end', (res) => callback(body));
        res.on('error', () => callback('Error'));
    }).on('error', (e) => callback(e));
}

var handlers = {
    'departureIntent': function () {
        var that = this;
        doAPIRequest(function(body) {
            var response = JSON.parse(body);
            var time = response.departures[0].time.split(' ');
            var route = response.departures[0].route;
            var destination = response.departures[0].destination;
            if (time == '0') {
                that.response.speak('<say-as interpret-as="interjection">Au weia</say-as>, die' + route + ' nach ' + destination + ' fährt jetzt sofort.');
                that.emit(':responseReady');
            } else {
                that.response.speak('Als nächstes fährt die ' + route + ' in Richtung ' + destination + ' in ' + time[0] + ' Minuten.');
                that.emit(':responseReady');
            }
            that.emit(':responseReady');
        });
    },
    'LaunchRequest': function () {
        this.response.speak('Hallo Philipp, willkommen beim KVV. Wie kann ich dir helfen?').listen(); 
        this.emit(':responseReady');
    }
};

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};