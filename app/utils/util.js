const kvvAPI = require('./kvvAPI');
const Stop = require('./stop');
const Route = require('./route');

module.exports = {
    'getStopByName': function (stopName) {
        var m = new Map();
        m.set('ebertstrasse', new Stop('Ebertstraße', 'de:8212:91'));
        m.set('europaplatz kaiserstrasse', new Stop('Europaplatz Kaiserstraße', 'de:8212:31'));
        m.set('europaplatz karlstrasse', new Stop('Europaplatz Karlsstraße', 'de:8212:60'));
        m.set('karlstor', new Stop('Karlstor', 'de:8212:61'));
        m.set('kronenplatz erler-strasse', new Stop('kKronenplatz Erler-Straße', 'de:8212:80'));
        m.set('muehlburger tor grashofstrasse', new Stop('Mühlburger Tor Grashofstraße', 'de:8212:321'));
        m.set('muehlburger tor kaiserallee', new Stop('Mühlburger Tor Kaiserallee', 'de:8212:49'));
        m.set('poststrasse', new Stop('Poststraße', 'de:8212:98'));
        m.set('schillerstrasse', new Stop('Schillerstraße', 'de:8212:40'));
        m.set('siemensallee', new Stop('Siemensallee', 'de:8212:525'));
        m.set('yorkstrasse', new Stop('Yorckstraße', 'de:8212:41'));
        m.set('zkm', new Stop('ZKM', 'de:8212:65'));

        return m.get(stopName.toLowerCase());
    },
    'getRouteByName': function (routeName) {
        var m = new Map();
        m.set('eins', new Route('1'));
        m.set('zwei', new Route('2'));
        m.set('drei', new Route('3'));
        m.set('vier', new Route('4'));
        m.set('fuenf', new Route('5'));
        m.set('sechs', new Route('6'));
        m.set('acht', new Route('8'));
        m.set('es eins', new Route('S 1'));
        m.set('es zwei', new Route('S 2'));
        m.set('es drei', new Route('S 3'));
        m.set('es vier', new Route('S 4'));
        m.set('es fuenf', new Route('S 5'));
        m.set('es sechs', new Route('S 6'));
        m.set('es sieben', new Route('S 7'));
        m.set('es acht', new Route('S 8'));
        m.set('es elf', new Route('S 11'));
        m.set('es dreiunddreissig', new Route('W 33'));
        m.set('es einundfuenfzig', new Route('S 51'));
        m.set('es zweiundfuenfzig', new Route('S 52'));
        m.set('es einundsiebzig', new Route('S 71'));
        m.set('es einundachzig', new Route('S 81'));

        return m.get(routeName.toLowerCase());
    },
};