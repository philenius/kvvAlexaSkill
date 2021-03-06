'use strict';

const time = require('./time');

module.exports = {
    'getCountOfDifferentRoutesDeparting': function(departures) {
        if (departures.length == 0) {
            return 0;
        }
        var routes = new Map();
        departures.forEach(departure => {
            routes.set(departure.route, true);
        });
        return routes.size;
    },
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
    /**
     * Filters for relevant departures. Departures which are in less than 2 minutes are ignored.
     * Returns at maximum 2 departures for each direction.
     */
    'getRelevantDepartures': function (departures) {
        const satisfactionCount = 2;

        var relevantDepartures = [];
        var direction1Counter = 0;
        var direction2Counter = 0;

        departures.forEach(departure => {
            // don't display departures which depart in less than 2 minutes
            if (!time.isAbsoluteTimestamp(departure.time) && time.getKVVTimestampWithoutUnit(departure.time) < 2) {
                return;
            }
            if (departure.direction == '1' && direction1Counter < satisfactionCount) {
                relevantDepartures.push(departure);
                direction1Counter++;
            } else if (departure.direction == '2' && direction2Counter < satisfactionCount) {
                relevantDepartures.push(departure);
                direction2Counter++;
            }
        });
        return relevantDepartures;
    },
};