
$(document).ready(function () {

    // Initialize Firebase
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


    var jobCompany = "";
    var jobCategory = "";
    var jobTitle = "";
    var jobType = "";
    var jobImage = "";
    var jobPhone = 0;
    var jobEmail = "";
    var jobURL = "";
    var jobContact = "";
    var jobDescription = "";

    $("#submit-job").on("click", function (event) {
        // Prevent form from submitting
        event.preventDefault();

        // Get the input values

        jobCompany = $("#jobCompany").val().trim();
        jobTitle = $("#jobTitle").val().trim();
        jobCategory = $("#jobCategory");
        // jobType = $("#jobType").val();
        // jobImage = $("#jobImage").val();
        jobPhone = $("#jobPhone").val();
        jobEmail = $("#jobEmail").val();
        jobURL = $("#jobURL").val();
        jobContact = $("#jobContact").val();
        jobDescription = $("#jobDescription").val();



        

        database.ref("/newJobs").push({
            jobCompany: jobCompany,
            jobCategory: jobCategory,
            jobTitle: jobTitle,
            jobType: jobType,
            jobImage: jobImage,
            jobPhone: jobPhone,
            jobEmail: jobEmail,
            jobURL: jobURL,
            jobContact: jobContact,
            jobDescription: jobDescription
        });
        // refresh();
    });

    function refresh() {
        $("#jobCompany").val("");
        $("#jobCategory").val("");
        $("#jobTitle").val("");
        $("#jobType").val("");
        // jobImage = "";
        $("#jobPhone").val("");
        $("#jobEmail").val("");
        $("#jobURL").val("");
        $("#jobContact").val("");
        $("#jobDescription").val("");
    }



    // Firebase watcher + initial loader
    database.ref("/newJobs").on("child_added", function (childSnapshot) {

        // Log everything that's coming out of snapshot
        console.log(childSnapshot.val().jobCompany);
        console.log(childSnapshot.val().jobCategory);
        console.log(childSnapshot.val().jobTitle);
        console.log(childSnapshot.val().jobType);
        console.log(childSnapshot.val().jobPhone);
        console.log(childSnapshot.val().jobEmail);
        console.log(childSnapshot.val().jobURL);
        console.log(childSnapshot.val().jobContact);
        console.log(childSnapshot.val().jobDescription);

        // var availableJobs = "<tr><td>" + childSnapshot.val().jobName + "</td><td>" + childSnapshot.val().jobLocation + "</td><td>" + childSnapshot.val().imageURL + "</td><td>" + childSnapshot.val().jobDescription + "</td></tr>";
        // // console.log(availableJobs);
        // $("#tableBody").append(availableJobs);


        // Handle the errors
    }, function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });



});