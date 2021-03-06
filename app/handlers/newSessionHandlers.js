'use strict';

const States = require('./states');
const util = require('../utils/util');

module.exports = {
    'NewSession': function () {
        if (Object.keys(this.attributes).length === 0) {
            this.attributes.data = {};
        }
        delete this.attributes.data.sessionStop;
        delete this.attributes.data.sessionRoute;
        delete this.attributes.data.apiStop;
        delete this.attributes.data.apiRoute;
        this.emit('LaunchIntent');
    },
    'LaunchIntent': function () {
        this.handler.state = States.MAIN;
        this.emit(':ask', this.t('WELCOME'), this.t('WELCOME_REPROMPT'));
    },
};