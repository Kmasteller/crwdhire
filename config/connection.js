
$(document).ready(function () {
    // console.log("ready!");
    // Initialize Firebase "https://www.gstatic.com/firebasejs/4.8.2/firebase.js"

    var config = {
    apiKey: "AIzaSyBq3rQU9-l0LPQiGXNivSsbS47MuNiW1XM",
    authDomain: "crwd-hire.firebaseapp.com",
    databaseURL: "https://crwd-hire.firebaseio.com",
    projectId: "crwd-hire",
    storageBucket: "crwd-hire.appspot.com",
    messagingSenderId: "646628438655"
  };
  
  firebase.initializeApp(config);



    var database = firebase.database();

    var name = "";
    var location = "";
    var imageURL = "";
    var description = "";


    $("#submit-job").on("click", function (event) {
        // Prevent form from submitting
        event.preventDefault();

        // Get the input values

        jobName = $("#name").val().trim();
        jobLocation = $("#location").val().trim();
        // imageURL = $("#imageURL").val().trim();
        jobDescription = $("#description").val().trim();

        database.ref("/newJobs").push({
            jobName: jobName,
            jobLocation: jobLocation,
            imageURL: imageURL,
            jobDescription: jobDescription
        });
    });




    // Firebase watcher + initial loader
    database.ref("/newJobs").on("child_added", function (childSnapshot) {

        // Log everything that's coming out of snapshot
        // console.log(childSnapshot.val().name);
        // console.log(childSnapshot.val().location);
        // console.log(childSnapshot.val().imageURL);
        // console.log(childSnapshot.val().description);


        var availableJobs = "<tr><td>" + childSnapshot.val().jobName + "</td><td>" + childSnapshot.val().jobLocation + "</td><td>" + childSnapshot.val().imageURL + "</td><td>" + childSnapshot.val().jobDescription + "</td></tr>";
        // console.log(availableJobs);
        $("#tableBody").append(availableJobs);


        // Handle the errors
    }, function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });

});
