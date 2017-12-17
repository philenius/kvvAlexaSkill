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
        var that = this;
        var apiStop = {};
        var sessionStop = '';
        if (this.event.request.intent.slots.stop.hasOwnProperty('value')) {
            // select stop by event data
            sessionStop = this.event.request.intent.slots.stop.value;
            apiStop = util.getStopByName(sessionStop);
            if (typeof apiStop === 'undefined' || Object.keys(apiStop).length === 0) {
                this.emit(':tell', this.t('DIRECT_DEPARTURE_HANDLER_UNKNOWN_STOP'));
                return;
            }
        } else {
            // select standard stop
            if (typeof this.attributes.data.standardStop === 'undefined') {
                this.emit(':ask', this.t('DIRECT_DEPARTURE_HANDLER_NO_STANDARD_STOP'));
                return;
            }
            apiStop = this.attributes.data.standardStop;
            sessionStop = apiStop.name;
        }

        this.attributes.data.sessionStop = sessionStop;
        this.attributes.data.apiStop = apiStop;

        var sessionRoute = this.event.request.intent.slots.route.value;
        var sessionRoutePrefix = this.event.request.intent.slots.routePrefix.value;
        if (sessionRoutePrefix !== undefined && sessionRoutePrefix === 'es') {
            this.attributes.data.sessionRoute = 'S' + sessionRoute;
        } else {
            this.attributes.data.sessionRoute = sessionRoute;
        }

        var apiRoute = util.getRouteByName(this.attributes.data.sessionRoute);
        if (apiRoute === undefined) {
            this.handler.state = States.NONE;
            this.emit(':tell', this.t('DIRECT_DEPARTURE_HANDLER_UNKNOWN_ROUTE'));
            return;
        }
        this.attributes.data.apiRoute = apiRoute;

        util.getNextDeparturesFromStopForRoute(apiStop, apiRoute, function (data, error) {
            var relevantDepartures = filter.getRelevantDepartures(data);
            var card = outputBuilder.buildCardForBothDirections(apiStop, apiRoute, relevantDepartures);
            that.handler.state = States.NONE;
            that.emit(':tellWithCard', outputBuilder.buildSpeechOutputForBothDirections(apiStop, apiRoute, relevantDepartures), card[0], card[1]);
        });
    },
    'AMAZON.YesIntent': function () {
        this.handler.state = States.SELECTSTANDARDSTOP;
        this.emit(':ask', this.t('DIRECT_DEPARTURE_HANDLER_SELECT_STANDARD_STOP'));
    },
    'AMAZON.NoIntent': function () {
        this.handler.state = States.MAIN;
        this.emit(':ask', this.t('HOW_CAN_I_HELP_YOU'));
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
