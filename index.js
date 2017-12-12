'use strict';

require('./app/utils/common');

const Alexa = require('alexa-sdk');
const newSessionHandlers = require('./app/handlers/newSessionHandlers');
const stopHandlers = require('./app/handlers/stopHandlers');
const routeHandlers = require('./app/handlers/routeHandlers');
const directDepartureHandlers = require('./app/handlers/directDepartureHandlers');
const standardStopHandlers = require('./app/handlers/standardStopHandlers');
const SpeechOutput = require('./app/resources/SpeechOutput');
const APP_ID = 'amzn1.ask.skill.df444b69-232f-4e91-bccb-0c5273f3f275';

exports.handler = function (event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.resources = SpeechOutput;
    alexa.appId = APP_ID;
    alexa.dynamoDBTableName = 'KvvAlexaSkillUserData';
    alexa.registerHandlers(newSessionHandlers, stopHandlers, routeHandlers, directDepartureHandlers, standardStopHandlers);
    alexa.execute();
};