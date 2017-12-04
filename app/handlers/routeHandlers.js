const Alexa = require('alexa-sdk');
const States = require('./states');

module.exports = Alexa.CreateStateHandler(States.SELECTROUTE, {
    'NewSession': function () {
        this.emit('NewSession');
    },
    'RouteIntent': function () {
        this.attributes.route = this.event.request.intent.slots.route.value;
        this.handler.state = States.NONE;

        var speechOutput = 'In Ordnung, ich werde nach einer Bahn der Linie ' + this.attributes.route + ' von ' + this.attributes.stop + ' suchen.'
        this.emit(':tell', speechOutput);
    },
    'Unhandled': function () {
    },
});