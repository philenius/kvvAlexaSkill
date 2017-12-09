'use strict';

const time = require('./time');
const filter = require('./filter');

module.exports = {
    /**
     * @param {Stop} stop
     * @param {Route} route
     */
    'buildSpeechOutputForBothDirections': function (stop, route, departures) {
        if (departures == null || departures.length == 0) {
            return speechOutput = 'Leider fahren im Moment keine Bahnen der Linie {0} <break strength="medium"/> von der Station {1}.'.format(route.name, stop.name);
        }

        var departuresDirection1 = filter.getDeparturesByDirection('1', departures);
        var departuresDirection2 = filter.getDeparturesByDirection('2', departures);

        var speechOutput = '';
        if (departuresDirection1.length != 0) {
            var route = departuresDirection1[0].route;
            var destination = departuresDirection1[0].destination;

            if (departuresDirection1.length == 1) {
                speechOutput = buildSpeechOutputForOneDepartureInOneDirection(route, destination, departuresDirection1);
            } else if (departuresDirection1.length == 2) {
                speechOutput = buildSpeechOutputForTwoDeparturesInOneDirection(route, destination, departuresDirection1);
            }
        }
        if (departuresDirection2.length != 0) {
            var route = departuresDirection2[0].route;
            var destination = departuresDirection2[0].destination;

            if (departuresDirection2.length == 1) {
                speechOutput += ' ' + buildSpeechOutputForOneDepartureInOneDirection(route, destination, departuresDirection2);
            } else if (departuresDirection2.length == 2) {
                speechOutput += ' ' + buildSpeechOutputForTwoDeparturesInOneDirection(route, destination, departuresDirection2);
            }
        }
        return speechOutput;
    }
}

// 1 departure
var buildSpeechOutputForOneDepartureInOneDirection = function (route, destination, departures) {
    var departureTime = buildDepartureTimeSpeechOutput(departures[0].time);

    return 'Die nächste {0} in Richtung {1} <break strength="medium"/> fährt {2}.'.format(route, destination, departureTime);
}

// 2 departures with the same direction
var buildSpeechOutputForTwoDeparturesInOneDirection = function (route, destination, departures) {
    var departureTime1 = buildDepartureTimeSpeechOutput(departures[0].time);
    var departureTime2 = buildDepartureTimeSpeechOutput(departures[1].time);

    return 'Die nächste {0} in Richtung {1} <break strength="medium"/> fährt {2} und wieder {3}.'.format(route, destination,
        departureTime1, departureTime2);
}

// builds speech output for a timestamp
var buildDepartureTimeSpeechOutput = function (departureTime) {
    var departureTimeSpeechOutput = '';
    if (time.isAbsoluteTimestamp(departureTime)) {
        departureTimeSpeechOutput = 'um {0}'.format(departureTime);
    } else {
        departureTime = time.getKVVTimestampWithoutUnit(departureTime);
        departureTimeSpeechOutput = 'in {0} Minuten'.format(departureTime);
    }
    return departureTimeSpeechOutput;
}