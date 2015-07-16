# geoOpenStates

A node module to get the boundaries from state legislative districts in the USA and put them all in a nice geojson object which can be used in GIS apps or web apps pretty trivially.


To get the sunlight foundation api to work correctly you'll need to set up an api/sunkey.js directory with the following contents:


var sunkey = '[Your sunlight foundation api key]';

module.exports = sunkey;

Then you just give it a state and a house and it will give you a callback with geojson of all the districts for it back as the first argument in a callback.

It also provides a way to get a list of all of the states and the houses related to them which is also in the test.js file as an example.
