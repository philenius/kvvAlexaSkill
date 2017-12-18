const fs = require('fs');
const stops = require('../app/utils/stops');


const file = fs.createWriteStream('custom_slots/stopSlotType');
file.on('error', function (err) {
    console.log('error during writing to file');
});
stops.forEach(stop => {
    stop.names.forEach(stopName => file.write(stopName + '\n'));
});
file.end();
console.log('Successfully generated StopSlotType');