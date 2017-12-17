'use strict';

const util = require('../utils/util');
const Stop = require('../models/stop');
const assert = require('assertthat');

test('getStopByName returns the correct stop when complete stop name given', () => {
    let stop1 = new Stop('Knielingen Siemensallee', 'de:8212:525', 49.02766089, 8.35015223)
    assert.that(util.getStopByName('Knielingen Siemensallee')).is.equalTo(stop1);

    let stop2 = new Stop('VBK', 'de:8212:7', 49.00625912, 8.43179805)
    assert.that(util.getStopByName('VBK')).is.equalTo(stop2);

    let stop3 = new Stop('Tullastraße', 'de:8212:7', 49.00625912, 8.43179805)
    assert.that(util.getStopByName('Tullastraße')).is.equalTo(stop3);

    let stop4 = new Stop('Daxlanden August-Dosenbach-Straße', 'de:8212:6220', 49.0020201, 8.34302367)
    assert.that(util.getStopByName('Daxlanden August-Dosenbach-Straße')).is.equalTo(stop4);
});

test('getStopByName returns undefined when incomplete stop name given', () => {
    assert.that(util.getStopByName('Siemensallee')).is.equalTo(undefined);
});