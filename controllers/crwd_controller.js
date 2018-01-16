var express = require("express");
var router = express.Router();

// Import the model
var crwdhire = require("../models/crwd_hire.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.redirect("/home");
});

router.get("/home", function(req, res) {
  jobs.all(function(data) {
    var hbsObject = {
      crwdhire: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/crwdhire/create", function(req, res) {
  crwdhire.create(req.body.crwdhire_name, function() {
  res.redirect("/home");
    });
});

router.post("/crwdhire/update/:id", function(req, res) {
  crwdhire.update(req.params.id, function() {
    res.redirect("/home");
  });
});

router.delete('/api/crwdhire/:id', function (req, res) {
  console.log(req.params.id)
  crwdhire.delete(req.params.id, function (data) {
    res.redirect("/home");
  })
});

// burger.delete("crwdhire", req.params.id, function (data) {
// Export routes for server.js to use.

module.exports = router;