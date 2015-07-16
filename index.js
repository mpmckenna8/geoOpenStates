var OpenStates = require('openstates');


// The api key for the sunlight foundation
var apiKey = require('./api/sunkey.js');

var getbounds = require('./distGeo.js')


var openstates = new OpenStates(apiKey);
var houser = [];


var geojson =
    { "type":"FeatureCollection",
      "features":[

      ]
    }

var printit = false;


module.exports = function(stater, cham, cb){


  var gostate = stater || "ny";
  var gohouse = cham || "upper";

  console.log(gostate)


  openstates.districtSearch(gostate, function(err, json) {
  if (err) throw err;
  console.log('lenth of distsearch', json.length);

  // this makes houser a the all the districts with the chamber we want
  houser = json.filter(function(d){
  //  console.log(d);
   return d.chamber == gohouse;
  })

  //

  for(i in houser){

   getbounds(houser[i].boundary_id, i, dealGeo)

  }

  console.log('geojson donzo')
//  getbounds(json[1].boundary_id, dealGeo)
  //console.log(geojson)
});

function dealGeo(d, go){
  console.log('dealing with', d);
  geojson.features.push(d);
  console.log(geojson.features.length);
  console.log(houser.length);

  if(geojson.features.length === houser.length){
    console.log(geojson);
    cb(geojson)
  }



}



}
