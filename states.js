

var OpenStates = require('openstates');

var apiKey = require('./api/sunkey.js');


var openstates = new OpenStates(apiKey);

var states;
//getleginfo('wi');

module.exports = function(cb){

// this is just getting a json array of states metatdata
return openstates.metadataOverview(function(err, json) {
  if (err) throw err;
  //console.log(json);
  states = json;
   



  cb(json);
});


}
