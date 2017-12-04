const States = require('./states');

module.exports = {
    'NewSession': function () {
        this.handler.state = States.SELECTSTOP;
        this.emit(':ask', 'Willkommen beim KVV. Von welcher Station möchtest du losfahren?', 'Nenne mir die nächstgelegene Haltestelle.');
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