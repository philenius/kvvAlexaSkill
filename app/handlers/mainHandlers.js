'use strict';

const Alexa = require('alexa-sdk');
const States = require('./states');
const util = require('../utils/util');

module.exports = Alexa.CreateStateHandler(States.MAIN, {
    'NewSession': function () {
        this.emit('NewSession');
    },
    'DepartureIntent': function () {
        this.handler.state = States.SELECTSTOP;
        this.emit(':ask', this.t('DEPARTURE'));
    },
    'DirectDepartureIntent': function () {
        this.handler.state = States.DIRECTDEPARTURE;
        this.emitWithState('DirectDepartureIntent');
    },
    'StandardStopIntent': function () {
        this.handler.state = States.SELECTSTANDARDSTOP;
        this.emit(':ask', this.t('STANDARD_STOP'));
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
        this.emit(':tell', this.t('ROUTE_HANDLER_HELP'));
    }
});