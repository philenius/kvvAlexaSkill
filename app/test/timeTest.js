'use strict';

const time = require('../utils/time');
const assert = require('assertthat');

test('isAbsoluteTimestamp returns that the given timestamp is an absolute timestamp', () => {
    assert.that(time.isAbsoluteTimestamp('23:59')).is.equalTo(true);
    assert.that(time.isAbsoluteTimestamp('12:30')).is.equalTo(true);
    assert.that(time.isAbsoluteTimestamp('09:00')).is.equalTo(true);
    assert.that(time.isAbsoluteTimestamp('6:05')).is.equalTo(true);
});

test('isAbsoluteTimestamp returns that the given timestamp is a relative timestamp', () => {
    assert.that(time.isAbsoluteTimestamp('120 min')).is.equalTo(false);
    assert.that(time.isAbsoluteTimestamp('20 min')).is.equalTo(false);
    assert.that(time.isAbsoluteTimestamp('5 min')).is.equalTo(false);
    assert.that(time.isAbsoluteTimestamp('0 min')).is.equalTo(false);
});

test('getKVVTimestampWithoutUnit returns the KVV timestamp without its unit', () => {
    assert.that(time.getKVVTimestampWithoutUnit('0')).is.equalTo('0');
    assert.that(time.getKVVTimestampWithoutUnit('1 min')).is.equalTo('1');
    assert.that(time.getKVVTimestampWithoutUnit('5 min')).is.equalTo('5');
    assert.that(time.getKVVTimestampWithoutUnit('6min')).is.equalTo('6');
    assert.that(time.getKVVTimestampWithoutUnit('10 min')).is.equalTo('10');
    assert.that(time.getKVVTimestampWithoutUnit('999 min')).is.equalTo('999');
});