'use strict';

const stops = require('../utils/stops');
const assert = require('assertthat');

test('each stop in stops array has one or more names', () => {
    stops.forEach(stop => {
        assert.that(typeof stop.names).is.not.equalTo(undefined);
        assert.that(stop.names.length).is.atLeast(1);
    });
});

test('each stop in stops array has an ID', () => {
    stops.forEach(stop => {
        assert.that(typeof stop.id).is.not.equalTo(undefined);
        assert.that(stop.id.length).is.atLeast(6);
    });
});

test('each stop ID exists only once', () => {
    let idMap = new Map();

    stops.forEach(stop => {
        if (idMap.has(stop.id)) {
            let oldValue = idMap.get(stop.id);
            idMap.set(stop.id, oldValue + 1);
        } else {
            idMap.set(stop.id, 1);
        }
    });

    idMap.forEach((v, k, m) => {
        assert.that(v).is.equalTo(1);
    });
});

test('each stop name exists only once', () => {
    let nameMap = new Map();

    stops.forEach(stop => {
        stop.names.forEach(stopName => {
            if (nameMap.has(stopName)) {
                let oldValue = nameMap.get(stopName);
                nameMap.set(stopName, oldValue + 1);
            } else {
                nameMap.set(stopName, 1);
            }
        });
    });

    nameMap.forEach((v, k, m) => {
        assert.that(v).is.equalTo(1);
    });
});