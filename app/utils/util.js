'use strict';

const kvvAPI = require('./kvvAPI');
const Stop = require('../models/stop');
const Route = require('../models/route');
const time = require('./time');
const filter = require('./filter');
const stops = require('./stops');

module.exports = {
    'getStopByName': function (stopName) {
        var m = new Map();        
        stops.forEach(stop => {
            if (stop.names.length > 1) {
                stop.names.forEach(stopName => {
                    m.set(stopName.toLowerCase(), new Stop(stopName, stop.id, stop.lat, stop.lon));
                })
            } else {
                m.set(stop.names[0].toLowerCase(), new Stop(stop.names[0], stop.id, stop.lat, stop.lon));
            }
        });
        return m.get(stopName.toLowerCase());
    },
    'getRouteByName': function (routeName) {
        var m = new Map();
        m.set('1', new Route('1'));
        m.set('2', new Route('2'));
        m.set('3', new Route('3'));
        m.set('4', new Route('4'));
        m.set('5', new Route('5'));
        m.set('6', new Route('6'));
        m.set('8', new Route('8'));
        m.set('s1', new Route('S1'));
        m.set('s2', new Route('S2'));
        m.set('s3', new Route('S3'));
        m.set('s4', new Route('S4'));
        m.set('s5', new Route('S5'));
        m.set('s6', new Route('S6'));
        m.set('s7', new Route('S7'));
        m.set('s8', new Route('S8'));
        m.set('s9', new Route('S9'));
        m.set('s11', new Route('S11'));
        m.set('s31', new Route('S31'));
        m.set('s32', new Route('S32'));
        m.set('s33', new Route('S33'));
        m.set('s41', new Route('S41'));
        m.set('s42', new Route('S42'));
        m.set('s51', new Route('S51'));
        m.set('s52', new Route('S52'));
        m.set('s71', new Route('S71'));
        m.set('s81', new Route('S81'));

        return m.get(routeName.toLowerCase());
    },
    /**
     * @param {Stop} stop
     * @param {function(array,error):void} callback
     */
    'getAllDeparturesFromStop': function (stop, callback) {
        kvvAPI.departuresByStop(stop, function (data, error) {
            var json = JSON.parse(data);

            var departures = json.departures;
            if (departures === undefined) {
                callback(null, new Error('invalid server response'));
                return;
            }
            if (departures.length == 0) {
                callback([], null);
                return;
            }
            callback(departures, null);
        });
    },
    /**
     * Get next departures from a given stop for a given route (both directions).
     * 
     * @param {Stop} stop
     * @param {Route} route
     * @param {function(array,error):void} callback
     */
    'getNextDeparturesFromStopForRoute': function (stop, route, callback) {
        kvvAPI.departuresByStop(stop, function (data, error) {
            if (error != null) {
                callback(null, error);
                return;
            }
            var json = JSON.parse(data);
            var departures = json.departures;
            if (departures == undefined) {
                callback(null, new Error('invalid server response'));
                return;
            }
            if (departures.length == 0) {
                callback([], null);
                return;
            }
            callback(filter.getDeparturesByRoute(route, departures), null);
        });
    },
    'random': function(speechOutputArray) {
        var i = 0;
        i = Math.floor(Math.random() * speechOutputArray.length);
        return speechOutputArray[i];
      },
};