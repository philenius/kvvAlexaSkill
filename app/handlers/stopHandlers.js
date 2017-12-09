'use strict';

const Alexa = require('alexa-sdk');
const States = require('./states');
const util = require('../utils/util');
const outputBuilder = require('../utils/ouputBuilder');
const filter = require('../utils/filter');

module.exports = Alexa.CreateStateHandler(States.SELECTSTOP, {
    'NewSession': function () {
        this.emit('NewSession');
    },
    'StopIntent': function () {
        var that = this;
        var sessionStop = this.event.request.intent.slots.stop.value;
        this.attributes.sessionStop = sessionStop;
        this.handler.state = States.SELECTROUTE;

        var apiStop = util.getStopByName(sessionStop);
        if (apiStop === undefined) {
            this.emit(':tell', 'Entschuldige, diese Station ist mir leider unbekannt.');
            return;
        }
        util.getAllDeparturesFromStop(apiStop, function (data, error) {
            var departingRoutesCount = filter.getCountOfDifferentRoutesDeparting(data);
            if (departingRoutesCount == 0) {
                that.emit(':tell', 'Leider fahren im Moment keine Bahnen von der Station {0}.'.format(apiStop.name));
            } else if (departingRoutesCount == 1) {
                var apiRoute = util.getRouteByName(data[0].route);
                util.getNextDeparturesFromStopForRoute(apiStop, apiRoute, function (data, error) {
                    var relevantDepartures = filter.getRelevantDepartures(data);
                    var card = outputBuilder.buildCardForBothDirections(apiStop, apiRoute, relevantDepartures);
                    that.emit(':tellWithCard', outputBuilder.buildSpeechOutputForBothDirections(apiStop, apiRoute, relevantDepartures), card[0], card[1]);
                });
            } else {
                that.attributes.apiStop = apiStop;
                that.emit(':ask', 'Alles klar, du möchtest von der Station <break strength="medium"/>' + apiStop.name + ' losfahren. Mit welcher Linie möchtest du fahren?', 'Nenne mir die Linie, mit der du fahren möchtest.');
            }
        });
    },
    'Unhandled': function () {
    },
});