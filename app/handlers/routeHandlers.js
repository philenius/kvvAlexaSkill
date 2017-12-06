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
        this.handler.state = States.NONE;

        var apiRoute = util.getRouteByName(sessionRoute);
        if (apiRoute === undefined) {
            this.emit(':tell', 'Entschuldige, diese Linie ist mir leider unbekannt.');
            return;
        }
        this.attributes.apiRoute = apiRoute;
        var cardTitle = 'KVV - Route';
        var cardContent = apiRoute.name;
        this.emit(':tellWithCard', 'Alles klar, du möchtest mit der Linie ' + apiRoute.name + ' fahren.', cardTitle, cardContent);
    },
    'Unhandled': function () {
        this.emit(':tell', 'Entschuldige, diese Linie kenne ich nicht.');
    },
});