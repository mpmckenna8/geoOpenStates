

var OpenStates = require('openstates');

var apiKey = require('./api/sunkey.js');
var makeGeo = require('./dist2geojson.js');

var openstates = new OpenStates(apiKey);

var geo;

module.exports = function(boundID,  go, cb){

  openstates.districtBoundary(boundID, function(err,d){
    if(err){
      console.log('there be an error getting the district boundaries');
      console.error('be an error');
      throw err;
    }

  //  console.log(d);
    geo = makeGeo(d);
    //console.log(geo);
    cb(geo, go)

  })


}
