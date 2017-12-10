'use strict';

const Alexa = require('alexa-sdk');
const States = require('./states');
const util = require('../utils/util');

module.exports = Alexa.CreateStateHandler(States.SELECTSTANDARDSTOP, {
    'NewSession': function () {
        this.emit('NewSession');
    },
    'StopIntent': function () {
        var sessionStop = this.event.request.intent.slots.stop.value;
        this.attributes.sessionStop = sessionStop;

        var apiStop = util.getStopByName(sessionStop);
        if (apiStop == undefined) {
            this.emit(':ask', 'Entschuldige, diese Station ist mir leider unbekannt. Nenne mir bitte erneut deine Station.',
                'Welche Station möchtest du als deine Standard Station festlegen?');
            return;
        }
        this.attributes.standardStop = apiStop;
        this.emit(':ask', '<say-as interpret-as="interjection">Alles klar</say-as>, ich trage Buxtehude als deine Standard Station ein.<break time="1s"/>' +
            '<say-as interpret-as="interjection">War nur ein Scherz.</say-as> ' +
            'Ich habe {0} verstanden. Ist das richtig?'.format(apiStop.name));
    },
    'AMAZON.YesIntent': function () {
        this.emit(':tell', util.random(this.t('SELECT_STANDARD_STOP_CONFIRMATION')));
    },
    'AMAZON.NoIntent': function () {
        this.attributes.standardStop = null;
        this.emit(':ask', '<say-as interpret-as="interjection">Mist.</say-as> Welche Station meintest du dann?');
    },
    'Unhandled': function () {
        this.emit(':tell', this.t('UNHANDLED'));
    },
});