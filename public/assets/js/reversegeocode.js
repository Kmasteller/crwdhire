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
        showAddress(tagAddress);
        showCity(tagCity);
        showState(tagState);
        showCounty(tagCounty);
      }
    });

  }

function showAddress(address) {
  $("#jobTagAddress").text(address);
}

function showCity(city) {
  $("#jobTagCity").text(city);
}

function showState(state) {
  $("#jobTagState").text(state);
}

function showCounty(county) {
  $("#jobTagCounty").text(county);
}


// method: "GET"
//     }).done(function (response) {
//   console.log(response);

//   // Getting the third row of the table
//   var thirdRowTds = $("table")
//     .children()
//     .eq(1)
//     .children("tr")
//     .eq(2)
//     .children("td");

//   // Setting text of the thirdRowTds
//   thirdRowTds.eq(0).text(response.Title);

//   thirdRowTds.eq(1).text(response.Year);

//   thirdRowTds.eq(2).text(response.Actors);