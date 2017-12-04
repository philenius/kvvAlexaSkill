const States = require('./states');

module.exports = {
    'NewSession': function () {
        this.handler.state = States.SELECTSTOP;
        this.emit(':ask', this.t('WELCOME'), this.t('WELCOME_REPROMPT'));
    },
    'LaunchRequest': function () {
    },
    'Unhandled': function () {
    },
    'AMAZON.StopIntent': function () {
    },
    'AMAZON.CancelIntent': function () {
    },
    'AMAZON.HelpIntent': function () {
    }
};