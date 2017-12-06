const Alexa = require('alexa-sdk');
const States = require('./states');
const util = require('../utils/util');

module.exports = Alexa.CreateStateHandler(States.SELECTSTOP, {
    'NewSession': function () {
        this.emit('NewSession');
    },
    'StopIntent': function () {
        var sessionStop = this.event.request.intent.slots.stop.value;
        this.attributes.sessionStop = sessionStop;
        this.handler.state = States.SELECTROUTE;

        var apiStop = util.getStopByName(sessionStop);
        if (apiStop === undefined) {
            this.emit(':tell', 'Entschuldige, diese Station ist mir leider unbekannt.');
            return;
        }
        this.attributes.apiStop = apiStop;
        var cardTitle = 'KVV - Station';
        var cardContent = apiStop.name + ' (' + apiStop.id + ')';
        this.emit(':askWithCard', 'Alles klar, du möchtest von der Station ' + apiStop.name + ' losfahren. Mit welcher Linie möchtest du fahren?', 'Nenne mir die Linie, mit der du fahren möchtest.', cardTitle, cardContent);
    },
    'Unhandled': function () {
    },
});