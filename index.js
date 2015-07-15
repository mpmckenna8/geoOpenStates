var OpenStates = require('openstates');


// The api key for the sunlight foundation
var apiKey = require('./api/sunkey.js');


var openstates = new OpenStates(apiKey);

module.exports = function(state, cham){


var gostate = state || "ny";
var gohouse = house || "upper";

console.log(gostate)


openstates.districtSearch(stater, function(err, json) {
if (err) throw err;
console.log('lenth of distsearch', json.length);
houser = json.filter(function(d){
 return d.chamber == cham;
})

for(i in houser){
// console.log('in th eupps',upper[i])
 if(i == houser.length -1){
   printit = true;
   console.log('doobie', i)
 }

 console.log('doobie', i)

// getbounds(houser[i].boundary_id, printit)

}
// getbounds(json[1].boundary_id)
//console.log(geojson)

});






}
