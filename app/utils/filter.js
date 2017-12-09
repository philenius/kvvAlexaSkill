'use strict';

const time = require('./time');

module.exports = {
    'getDeparturesByRoute': function (route, departures) {
        return departures.filter(function (departure) {
            return departure.route == route.name;
        });
    },
    'getDeparturesByDirection': function (direction, departures) {
        return departures.filter(function (departure) {
            return departure.direction == direction;
        });
    },
    'getRelevantDepartures': function (departures) {
        var counter = 0;
        var firstTwoTrains = [];
        departures.forEach(departure => {
            if (counter >= 2) {
                return;
            }
            // don't display departures which depart in less than 2 minutes
            if (!time.isAbsoluteTimestamp(departure.time) && time.getKVVTimestampWithoutUnit(departure.time) < 2) {
                return;
            }
            firstTwoTrains.push(departure);
            counter++;
        });
        return firstTwoTrains;
    },
};