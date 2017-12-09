const Alexa = require('alexa-sdk');
const States = require('./states');
const util = require('../utils/util');
const speechBuilder = require('../utils/speechOuputBuilder');

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
            var cardContent = '';
            if (data[0].length == 0) {
                cardContent = 'Keine Bahnen.'
            } else if (data[0].length == 1) {
                cardContent = data[0][0].destination + ': ' + data[0][0].time + '\n';
            } else if (data[0].length == 2) {
                cardContent = data[0][0].destination + ': ' + data[0][0].time + ', ' + data[0][1].time + '\n';
            }
            if (data[1].length == 0) {
                cardContent += 'Keine Bahnen.'
            } else if (data[1].length == 1) {
                cardContent += data[1][0].destination + ': ' + data[1][0].time + '\n';
            } else if (data[1].length == 2) {
                cardContent += data[1][0].destination + ': ' + data[1][0].time + ', ' + data[1][1].time + '\n';
            }
            that.emit(':tellWithCard', speechBuilder.buildSpeechOutputForAnyDirection(data[0]) + speechBuilder.buildSpeechOutputForAnyDirection(data[1]), cardTitle, cardContent);
        });
    },
    'Unhandled': function () {
        this.emit(':tell', 'Entschuldige, diese Linie kenne ich nicht.');
    },
});