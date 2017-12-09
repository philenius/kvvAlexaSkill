'use strict';

const filter = require('../utils/filter');
const assert = require('assertthat');

test('isOnlyOneRouteDeparting returns that the array of departures contains only one route', () => {
    var data = [
        {
            'route': '3',
        },
        {
            'route': '3',
        },
        {
            'route': '3',
        },
    ];
    assert.that(filter.isOnlyOneRouteDeparting(data)).is.equalTo(true);
});

test('isOnlyOneRouteDeparting returns that the array of departures contains more than one route', () => {
    var data = [
        {
            'route': '3',
        },
        {
            'route': 'S5',
        },
        {
            'route': '3',
        },
    ];
    assert.that(filter.isOnlyOneRouteDeparting(data)).is.equalTo(false);
});