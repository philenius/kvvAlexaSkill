'use strict';

const Alexa = require('alexa-sdk');
const newSessionHandlers = require('./app/handlers/newSessionHandlers');
const SpeechOutput = require('./app/resources/SpeechOutput');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.resources = SpeechOutput;
    alexa.registerHandlers(newSessionHandlers);
    alexa.execute();
};