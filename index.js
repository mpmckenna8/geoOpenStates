var OpenStates = require('openstates');


// The api key for the sunlight foundation
var apiKey = require('./api/sunkey.js');


var openstates = new OpenStates(apiKey);

module.exports = function(state, house){


var gostate = state || "ny";
var gohouse = house || "upper";

console.log(gostate)


}
