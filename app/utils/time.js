'use strict';

module.exports = {
    'isAbsoluteTimestamp': function (kvvTimestamp) {
        var regex = new RegExp('[0-9]{1,2}:[0-9]{2}');
        return regex.test(kvvTimestamp);
    },
    'getKVVTimestampWithoutUnit': function (kvvTimestamp) {
        kvvTimestamp = kvvTimestamp.replace(' ', '');
        var i = kvvTimestamp.indexOf('m');
        if (i == -1) {
            return kvvTimestamp;
        }
        return kvvTimestamp.substring(0, i);
    },
};