const kvvAPI = require('./kvvAPI');
const Stop = require('./stop');
const Route = require('./route');

module.exports = {
    'getStopByName': function (stopName) {
        var m = new Map();
        m.set('ebertstrasse', new Stop('Ebertstraße', 'de:8212:91'));
        m.set('europaplatz kaiserstraße', new Stop('Europaplatz Kaiserstraße', 'de:8212:31'));
        m.set('europaplatz karlstraße', new Stop('Europaplatz Karlsstraße', 'de:8212:60'));
        m.set('karlstor', new Stop('Karlstor', 'de:8212:61'));
        m.set('kronenplatz erler-straße', new Stop('kKronenplatz Erler-Straße', 'de:8212:80'));
        m.set('mühlburger tor grashofstraße', new Stop('Mühlburger Tor Grashofstraße', 'de:8212:321'));
        m.set('mühlburger tor kaiserallee', new Stop('Mühlburger Tor Kaiserallee', 'de:8212:49'));
        m.set('poststrasse', new Stop('Poststraße', 'de:8212:98'));
        m.set('rüppurer tor', new Stop('Rüppurer Tor', 'de:8212:85'));
        m.set('schillerstraße', new Stop('Schillerstraße', 'de:8212:40'));
        m.set('siemensallee', new Stop('Siemensallee', 'de:8212:525'));
        m.set('yorkstraße', new Stop('Yorckstraße', 'de:8212:41'));
        m.set('zkm', new Stop('ZKM', 'de:8212:65'));

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
        m.set('s11', new Route('S11'));
        m.set('s33', new Route('S33'));
        m.set('s51', new Route('S51'));
        m.set('s52', new Route('S52'));
        m.set('s71', new Route('S71'));
        m.set('s81', new Route('S81'));

        return m.get(routeName.toLowerCase());
    },
};