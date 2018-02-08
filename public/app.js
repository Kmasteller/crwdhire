// Grab the articles as a json
$.getJSON("/articles", function(data) {
  // For each one
  for (var i = 0; i < data.length; i++) {
    // Display the apropos information on the page
    $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + "<a href='" + data[i].link +  "'>" + data[i].link  + "</a></p>");
  }
});


// Whenever someone clicks a p tag
$(document).on("click", "p", function() {
  // Empty the notes from the note section
  $("#notes").empty();
  // Save the id from the p tag
  var thisId = $(this).attr("data-id");

  // Now make an ajax call for the Article
  $.ajax({
    method: "GET",
    url: "/articles/" + thisId
  })
    // With that done, add the note information to the page
    .done(function(data) {
      console.log(data);
      // The title of the article
      $("#notes").append("<h5>" + data.title + "</h5>");
      // An input to enter a new title
      $("#notes").append("<input placeholder='Comment Title' id='titleinput' name='title' >");
      // A textarea to add a new note body
      $("#notes").append("<textarea placeholder='Add comments here...' id='bodyinput' name='body'></textarea>");
      // A button to submit a new note, with the id of the article saved to it
      $("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");

      $("#notes").append("<div data-id='" + data._id + "' id='prevNotes'></div>");


      // If there's a note in the article
      if (data.note) {
        for(var i = 0; i < data.note.length; i++){
          var noteDiv = $("<div>")
          // Place the title of the note in the title input
          noteDiv.append(`<div align='right'><b id='remove' data-noteId="${data.note[i]._id}">X</b></div>`);
          noteDiv.append(`<div><b>${data.note[i].title}</b></div>`);
          // Place the body of the note in the body textarea
          noteDiv.append(`<div align='left'>${data.note[i].body}</div>`)
          noteDiv.append(`<hr>`)
          $("#prevNotes").append(noteDiv);
        }
      }
    });
});

// When you click the savenote button
$(document).on("click", "#savenote", function() {
  // Grab the id associated with the article from the submit button
  var thisId = $(this).attr("data-id");

  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
      // Value taken from title input
      title: $("#titleinput").val(),
      // Value taken from note textarea
      body: $("#bodyinput").val()
    }
  })
    // With that done
    .done(function(data) {
      // Log the response
      console.log(data);
      // Empty the notes section
      $("#notes").empty();
    });

  // Also, remove the values entered in the input and textarea for note entry
  $("#titleinput").val("");
  $("#bodyinput").val("");
});

$(document).on("click", "#remove", function() {
  console.log("the x marks the spot");
  console.log($(this).attr("data-noteId"));
})