'use strict';

const time = require('./time');

module.exports = {
    'buildSpeechOutputForAnyDirection': function (departures) {
        // TODO: if there are no trains, then display the message only one time
        // TODO: display time unit for absolute timestamps

        if (departures == null || departures.length == 0) {
            return speechOutput = 'Leider fahren im Moment keine Bahnen. ';
        }

        var speechOutput = 'Die nächste ' + departures[0].route + ' in Richtung ' + departures[0].destination + ' fährt';
        if (departures.length == 2) {
            if (time.isAbsoluteTimestamp(departures[0].time)) {
                speechOutput += ' um ' + departures[0].time + ' und wieder'
            } else {
                speechOutput += ' in ' + time.getKVVTimestampWithoutUnit(departures[0].time) + ' Minuten und wieder';
            }
            if (time.isAbsoluteTimestamp(departures[1].time)) {
                speechOutput += ' um ' + departures[1].time + '. '
            } else {
                speechOutput += ' in ' + time.getKVVTimestampWithoutUnit(departures[1].time) + ' Minuten. ';
            }
        } else if (departures.length == 1) {
            if (time.isAbsoluteTimestamp(departures[0].time)) {
                speechOutput += ' um ' + departures[0].time + '. '
            } else {
                speechOutput += ' in ' + time.getKVVTimestampWithoutUnit(departures[0].time) + ' Minuten. ';
            }
        }
        return speechOutput;
    }
}
