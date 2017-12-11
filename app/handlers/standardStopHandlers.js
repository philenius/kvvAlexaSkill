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
        this.attributes.data.sessionStop = sessionStop;

        var apiStop = util.getStopByName(sessionStop);
        if (apiStop == undefined) {
            this.emit(':ask', this.t('STANDARD_STOP_UNKNONW_STOP'), this.t('STANDARD_STOP_UNKNONW_STOP_REPROMPT'));
            return;
        }
        this.attributes.data.standardStop = apiStop;
        this.emit(':ask', this.t('STANDARD_STOP_ANSWER', apiStop.name));
    },
    'AMAZON.YesIntent': function () {
        this.emit(':tell', util.random(this.t('STANDARD_STOP_YES')));
    },
    'AMAZON.NoIntent': function () {
        this.attributes.data.standardStop = {};
        this.emit(':ask', 'STANDARD_STOP_NO');
    },
    'Unhandled': function () {
        this.emit(':tell', this.t('UNHANDLED'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', util.random(this.t('STOP')));
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', util.random(this.t('CANCEL')));
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':tell', this.t('STANDARD_STOP_HELP'));
    }
});