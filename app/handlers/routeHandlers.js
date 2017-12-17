'use strict';

const Alexa = require('alexa-sdk');
const States = require('./states');
const util = require('../utils/util');
const outputBuilder = require('../utils/ouputBuilder');
const filter = require('../utils/filter');

module.exports = Alexa.CreateStateHandler(States.SELECTROUTE, {
    'NewSession': function () {
        this.emit('NewSession');
    },
    'RouteIntent': function () {
        var that = this;
        var sessionRoute = this.event.request.intent.slots.route.value;
        var sessionRoutePrefix = this.event.request.intent.slots.routePrefix.value;
        if (sessionRoutePrefix !== undefined && sessionRoutePrefix === 'es') {
            this.attributes.data.sessionRoute = 'S' + sessionRoute;
        } else {
            this.attributes.data.sessionRoute = sessionRoute;
        }

        var apiRoute = util.getRouteByName(this.attributes.data.sessionRoute);
        if (apiRoute === undefined) {
            this.emit(':ask', this.t('ROUTE_HANDLER_UNKNOWN_ROUTE'), this.t('ROUTE_HANDLER_UNKNOWN_ROUTE_REPROMT'));
            return;
        }
        this.attributes.data.apiRoute = apiRoute;
        var apiStop = this.attributes.data.apiStop;
        
        util.getNextDeparturesFromStopForRoute(apiStop, apiRoute, function (data, error) {
            var relevantDepartures = filter.getRelevantDepartures(data);
            var card = outputBuilder.buildCardForBothDirections(apiStop, apiRoute, relevantDepartures);
            that.emit(':tellWithCard', outputBuilder.buildSpeechOutputForBothDirections(apiStop, apiRoute, relevantDepartures), card[0], card[1]);
        });
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