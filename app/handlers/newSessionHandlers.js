'use strict';

const States = require('./states');
const util = require('../utils/util');

module.exports = {
    'NewSession': function () {
        if (Object.keys(this.attributes).length === 0) {
            this.attributes.data = {};
        }
        this.emit('LaunchIntent');
    },
    'LaunchIntent': function () {
        var cardTitle = 'Willkommen beim KVV';
        var cardContent = 'VBK - Verkehrsbetriebe Karlsruhe';
        var imageObj = {
            smallImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Tram_at_Karlsruhe_Marktplatz_-_geo.hlipp.de_-_4294.jpg',
            largeImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Tram_at_Karlsruhe_Marktplatz_-_geo.hlipp.de_-_4294.jpg'
        };
        this.emit(':askWithCard', this.t('WELCOME'), this.t('WELCOME_REPROMPT'), cardTitle, cardContent, imageObj);
    },
    'DepartureIntent': function () {
        this.handler.state = States.SELECTSTOP;
        this.emit(':ask', this.t('DEPARTURE'));
    },
    'StandardStopIntent': function () {
        this.handler.state = States.SELECTSTANDARDSTOP;
        this.emit(':ask', this.t('STANDARD_STOP'));
    },
    'Unhandled': function () {
        this.emit(':tell', this.t('UNHANDLED'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', util.random(this.t('STOP_ANSWER')));
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', util.random(this.t('CANCEL_ANSWER')));
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':tell', this.t('HELP_ANSWER'));
    }
};