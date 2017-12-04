const States = require('./states');

module.exports = {
    'NewSession': function () {
        this.handler.state = States.SELECTSTOP;
        var cardTitle = 'Willkommen beim KVV';
        var cardContent = 'VBK - Verkehrsbetriebe Karlsruhe';
        var imageObj = {
            smallImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Tram_at_Karlsruhe_Marktplatz_-_geo.hlipp.de_-_4294.jpg',
            largeImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Tram_at_Karlsruhe_Marktplatz_-_geo.hlipp.de_-_4294.jpg'
        };
        this.emit(':askWithCard', this.t('WELCOME'), this.t('WELCOME_REPROMPT'), cardTitle, cardContent, imageObj);
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