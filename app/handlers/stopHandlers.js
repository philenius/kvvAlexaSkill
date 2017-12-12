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
        this.attributes.data.sessionStop = sessionStop;

        var apiStop = util.getStopByName(sessionStop);
        if (apiStop === undefined) {
            this.emit(':tell', 'Entschuldige, diese Station ist mir leider unbekannt.');
            return;
        }
        this.attributes.data.apiStop = apiStop;

        this.handler.state = States.SELECTROUTE;
        
        util.getAllDeparturesFromStop(apiStop, function (departures, error) {
            if (error != null) {
                that.emit(':tell', that.t('UNHANDLED'));
                return;
            }

            var departingRoutesCount = filter.getCountOfDifferentRoutesDeparting(departures);
            // If there's only one route departing from this station, then don't ask the user for the route. Instead answer directly with the current departures.
            if (departingRoutesCount == 0) {
                that.emit(':tell', that.t('STOP_INTENT_ANSWER_NO_DEPARTURES', apiStop.name));
            } else if (departingRoutesCount == 1) {
                var apiRoute = util.getRouteByName(departures[0].route);
                // The route may still be unknown because KVV invents weirdo routes sometimes...
                if (apiRoute == undefined) {
                    that.emit(':ask', that.t('STOP_INTENT_ANSWER', apiStop.name), that.t('STOP_INTENT_ANSWER_REPROMPT'));
                    return;
                }
                util.getNextDeparturesFromStopForRoute(apiStop, apiRoute, function (data, error) {
                    var relevantDepartures = filter.getRelevantDepartures(data);
                    var card = outputBuilder.buildCardForBothDirections(apiStop, apiRoute, relevantDepartures);
                    that.emit(':tellWithCard', outputBuilder.buildSpeechOutputForBothDirections(apiStop, apiRoute, relevantDepartures), card[0], card[1]);
                });
            } else {
                that.emit(':ask', that.t('STOP_INTENT_ANSWER', apiStop.name), that.t('STOP_INTENT_ANSWER_REPROMPT'));
            }
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
        this.emit(':tell', this.t('STOP_INTENT_HELP'));
    }
});