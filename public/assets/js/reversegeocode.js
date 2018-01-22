var tagCity = "";
var tagCounty = "";
var tagState = "";
var tagAddress = "";


function searchLocation (lat, long) {
  var key = "AIzaSyCDDrCqsOfxZh6rKXGIn_kLl9gHs1mlEEY";
  var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + "&key=" + key;

  console.log(url);


   $.ajax({
      type:"GET",
      url: url,
      async:true,
      dataType: "json",
      success: function(json) {
        console.log(json);
        console.log(json.results[0].address_components[2].long_name);
        var tagCity = json.results[0].address_components[2].long_name;

        console.log(json.results[0].address_components[3].long_name);
        var tagCounty = json.results[0].address_components[3].long_name;

        console.log(json.results[0].address_components[4].short_name);
        var tagState = json.results[0].address_components[4].short_name;

        console.log(json.results[0].formatted_address);
        var tagAddress = json.results[0].formatted_address;

      }
    });

  }