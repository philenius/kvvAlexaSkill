const Alexa = require('alexa-sdk');
const States = require('./states');

module.exports = Alexa.CreateStateHandler(States.SELECTSTOP, {
    'NewSession': function () {
        this.emit('NewSession');
    },
    'StopIntent': function () {
        this.attributes.stop = this.event.request.intent.slots.stop.value;
        this.handler.state = States.SELECTROUTE;

        this.emit(':ask', 'Alles klar, du möchtest von der Station ' + this.attributes.stop + ' losfahren. Mit welcher Linie möchtest du fahren?', 'Nenne mir die Linie, mit der du fahren möchtest.');
    },
    'Unhandled': function () {
    },
});