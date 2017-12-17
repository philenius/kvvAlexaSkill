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
        this.attributes.data.tempStandardStop = apiStop;
        this.emit(':ask', this.t('STANDARD_STOP_ANSWER', apiStop.name));
    },
    'AMAZON.YesIntent': function () {
        this.attributes.data.standardStop = this.attributes.data.tempStandardStop;
        delete this.attributes.data.tempStandardStop;
        this.handler.state = States.MAIN;
        this.emit(':ask', util.random(this.t('STANDARD_STOP_YES')) + ' ' + this.t('HOW_CAN_I_HELP_YOU'));
    },
    'AMAZON.NoIntent': function () {
        delete this.attributes.data.tempStandardStop;
        this.emit(':ask', this.t('STANDARD_STOP_NO'));
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