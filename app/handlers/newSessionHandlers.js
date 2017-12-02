const helpers = require('../utils/helpers');
const directlyStartableIntens = ['departureIntent'];

module.exports = {
    'NewSession': function () {
        if (this.event.request.type === 'IntentRequest') {
            console.log("no LaunchRequest");
            const intentName = this.event.request.intent.name;
            if (directlyStartableIntens.indexOf(intentName) > -1) {
                console.log("intent exists");
                return this.emit(intentName);
            }
        }
        this.emit('LaunchRequest');
    },
    'LaunchRequest': function () {
        this.response.speak(this.t('WELCOME')).listen(); 
        this.emit(':responseReady');
    },
    'departureIntent': function () {
        var that = this;
        var stop = this.event.request.intent.slots.stop.value;

        if (!stop) {
            this.emit(':tell', 'Tut mir leid, diese oder eine ähnliche Station kann ich nicht finden.');
            return
        }
        
        var station = helpers.getStopByName(stop);
        if (typeof(station) === "string") {
            this.response.speak('Alles klar, du möchtest von der Station ' + stop + ' fahren.');
            helpers.departuresByStop(station, function(body) {
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
    'AMAZON.StopIntent': function() {
        this.emit(':tell', '<say-as interpret-as="interjection">Bis bald.</say-as>')   
    },
    'AMAZON.CancelIntent': function() {
        this.emit(':tell', '<say-as interpret-as="interjection">Alles klar.</say-as><say-as interpret-as="interjection">Mach\'s gut</say-as>')
    },
    'AMAZON.HelpIntent': function() {
        this.response.speak('Aktuell sind leider nur Stationen innerhalb von Karlsruhe verfügbar. Dass man die gewünschte Linie angeben kann, wird in naher Zukunft umgesetzt werden. ' +
         'Folgende Frage kannst du mir beispielhaft stellen. Wann fährt die nächste Bahn von der Schillerstraße?' +
         '<break time="1s"/> Ich hoffe, ich konnte dir hiermit weiterhelfen.');
        this.emit(':responseReady');
    }
};