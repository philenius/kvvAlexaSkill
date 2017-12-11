'use strict';

const Alexa = require('alexa-sdk');
const States = require('./states');
const util = require('../utils/util');
const outputBuilder = require('../utils/ouputBuilder');
const filter = require('../utils/filter');

module.exports = Alexa.CreateStateHandler(States.DIRECTDEPARTURE, {
    'NewSession': function () {
        this.emit('NewSession');
    },
    'DirectDepartureIntent': function () {
        this.emit(':tell', 'Du hast es geschafft!');
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
        this.emit(':tell', this.t('HELP'));
    }
});
