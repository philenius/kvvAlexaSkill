const https = require('https');

module.exports = {
    "departuresByStop": function(stopID, callback) {
        https.get('https://live.kvv.de/webapp/departures/bystop/' + stopID + '?key=377d840e54b59adbe53608ba1aad70e8', (res) => {
            var body = '';
            res.on('data', (data) => {
                body += data;
            });
            res.on('end', (res) => callback(body));
            res.on('error', () => callback('Error'));
        }).on('error', (e) => callback(e));
    },
    "getStopByName": function(station) {
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
}