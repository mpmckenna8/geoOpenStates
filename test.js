var states = require('./states.js');
var leginfo = require('./index.js');


var beep = states(cb);

//console.log(beep)
leginfo('co', 'upper', cb);

function cb(json){
    console.log(json)
}
