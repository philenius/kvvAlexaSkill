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
            this.attributes.route = 'S' + sessionRoute;
        } else {
            this.attributes.route = sessionRoute;
        }

        var apiRoute = util.getRouteByName(this.attributes.route);
        if (apiRoute === undefined) {
            this.emit(':ask', 'Entschuldige, diese Linie ist mir leider nicht bekannt. Mit welcher Linie möchtest du fahren?', 'Bitte nenne die gewünschte Linie erneut.');
            return;
        }
        this.attributes.apiRoute = apiRoute;
        this.handler.state = States.NONE;
        var apiStop = this.attributes.apiStop;

        util.getNextDeparturesFromStopForRoute(apiStop, apiRoute, function (data, error) {
            var relevantDepartures = filter.getRelevantDepartures(data);
            var card = outputBuilder.buildCardForBothDirections(apiStop, apiRoute, relevantDepartures);
            that.emit(':tellWithCard', outputBuilder.buildSpeechOutputForBothDirections(apiStop, apiRoute, relevantDepartures), card[0], card[1]);
        });
    },
    'Unhandled': function () {
        this.emit(':tell', 'Entschuldige, diese Linie kenne ich nicht.');
    },
});