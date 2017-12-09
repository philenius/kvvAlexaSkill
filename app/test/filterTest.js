'use strict';

const filter = require('../utils/filter');
const assert = require('assertthat');

test('getCountOfDifferentRoutesDeparting returns 0 because there are no departures', () => {
    var data = [];
    assert.that(filter.getCountOfDifferentRoutesDeparting(data)).is.equalTo(0);
});

test('getCountOfDifferentRoutesDeparting returns the correct count of different routers departing', () => {
    var data = [
        {
            'route': '3',
        },
        {
            'route': 'S5',
        },
        {
            'route': 'S51',
        },
    ];
    assert.that(filter.getCountOfDifferentRoutesDeparting(data)).is.equalTo(3);
    data = [
        {
            'route': 'S11',
        },
        {
            'route': 'S11',
        },
    ];
    assert.that(filter.getCountOfDifferentRoutesDeparting(data)).is.equalTo(1);
});