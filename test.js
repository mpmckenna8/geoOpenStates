var stateGeo = require('./index.js');

var states = require('./states.js');

// this will use the main module to get all the districts in the upper house for Colorado and give us a nice geojson object in the callback
//
stateGeo('co', 'upper', cb);


var beep = states(cb);

//console.log(beep)


function cb(json){
    console.log(json)
}
