const Alexa = require('alexa-sdk');
const States = require('./states');
const util = require('../utils/util');

module.exports = Alexa.CreateStateHandler(States.SELECTROUTE, {
    'NewSession': function () {
        this.emit('NewSession');
    },
    'RouteIntent': function () {
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
        var cardTitle = 'KVV - Route';
        var cardContent = apiRoute.name;

        this.handler.state = States.NONE;
        this.emit(':tellWithCard', 'Alles klar, du möchtest mit der Linie ' + apiRoute.name + ' fahren.', cardTitle, cardContent);
    },
    'Unhandled': function () {
        this.emit(':tell', 'Entschuldige, diese Linie kenne ich nicht.');
    },
});