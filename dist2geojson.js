module.exports = function(json){


  var feat =   { "type":"Feature",
            "geometry":{"type": "Polygon", "coordinates":[]},
            "properties":{

              }
            }


//  console.log(json.shape)
  if(json.shape){

  if(json.shape.length > 1){
    feat.geometry = {"type":"MultiPolygon",
    "coordinates":json.shape}

  //  console.log(json.shape)
  }
  else{
    console.log('just a reg polygon')
    // for whatever reason I need to just select the first item in the array
    feat.geometry.coordinates = json.shape[0];
  }

  console.log(Object.keys(json))


  feat.properties = {'abbr':json.abbr,
        'name':json.name,
        'boundary_id': json.boundary_id,
      //  'region':json.region,
        'chamber':json.chamber,
        'num_seats':json.num_seats};
      }

  return feat;


}
