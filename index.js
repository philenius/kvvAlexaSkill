'use strict';

const Alexa = require('alexa-sdk');
const https = require('https');

function departuresByStop(stopID, callback) {
    https.get('https://live.kvv.de/webapp/departures/bystop/' + stopID + '?key=377d840e54b59adbe53608ba1aad70e8', (res) => {
        var body = '';
        res.on('data', (data) => {
            body += data;
        });
        res.on('end', (res) => callback(body));
        res.on('error', () => callback('Error'));
    }).on('error', (e) => callback(e));
}

function getStopByName(station) {
    var map = new Map();
    map.set("ebertstraße", "de:8212:91");
    map.set("europaplatz kaiserstraße", "de:8212:31");
    map.set("europaplatz karlstraße", "de:8212:60");
    map.set("karlstor", "de:8212:61");
    map.set("kronenplatz erler-straße", "de:8212:80");
    map.set("mühlburger tor grashofstraße", "de:8212:321");
    map.set("mühlburger tor kaiserallee", "de:8212:49");
    map.set("poststraße", "de:8212:98");
    map.set("poststraße", "de:8212:98");
    map.set("schillerstraße", "de:8212:40");
    map.set("zkm", "de:8212:65");

    var value = map.get(station.toLowerCase())
    if (value !== undefined) {
        return value;
    }
    var keyIterator = map.keys();
    var status = {};
    var similarStations = [];
    while (true) {
        status = keyIterator.next();
        if (status.done) {
            break;
        }
        if (status.value.includes(station)) {
            similarStations.push(status.value);
        }
    }
    return similarStations;
}

var handlers = {
    'departureIntent': function () {
        var that = this;
        var stop = this.event.request.intent.slots.stop.value;
        if (stop === undefined) {
            this.emit(':tell', 'Tut mir leid, diese oder eine ähnliche Station kann ich nicht finden.');
        }
        
        var station = getStopByName(stop);
        if (typeof(station) === "string") {
            this.response.speak('Alles klar, du möchtest von der Station ' + stop + ' fahren.');
            departuresByStop(station, function(body) {
                var response = JSON.parse(body);
                var time = response.departures[0].time.split(' ');
                var route = response.departures[0].route;
                var destination = response.departures[0].destination;
                if (time == '0') {
                    that.response.speak('<say-as interpret-as="interjection">Au weia</say-as>, die ' + route + ' nach ' + destination + ' fährt jetzt sofort.');
                    that.emit(':responseReady');
                } else {
                    that.response.speak('Als nächstes fährt die ' + route + ' in Richtung ' + destination + ' in ' + time[0] + ' Minuten.');
                    that.emit(':responseReady');
                }
                that.emit(':responseReady');
            });
        } else if (Array.isArray(station)) {
            if (station.length === 0) {
                this.emit(':tell', 'Tut mir leid, diese oder eine ähnliche Station kann ich nicht finden.');
            } else {
                var stationString = '';
                station.forEach(function(elem){
                    stationString += elem + '<break strength="strong"/>';
                });
                this.response.speak('Es gibt mehrere Stationen, die <phoneme alphabet="ipa" ph="s,o">so</phoneme> ähnlich heißen. Folgende Stationen habe ich gefunden. ' + stationString + '. Bitte wiederhole deine Anfrage.').listen();
                this.emit(':responseReady');
            }
        } else {
            this.emit(':tell', 'Entschuldige bitte, das hätte nicht passieren dürfen. Leider ist bei deiner Anfrage ein Fehler aufgetreten.');
        }
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