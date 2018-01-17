var express = require("express");
var router = express.Router();

// Import the model
var crwdhire = require("../models/crwd_hire.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.redirect("/");
});

router.get("/", function(req, res) {
  jobs.all(function(data) {
    var hbsObject = {
      crwdhire: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/add", function(req, res) {
  crwdhire.create(req.body.crwdhire_name, function() {
  res.redirect("/");
    });
});

router.post("/update/:id", function(req, res) {
  crwdhire.update(req.params.id, function() {
    res.redirect("/");
  });
});

router.delete('/jobs/:id', function (req, res) {
  console.log(req.params.id)
  crwdhire.delete(req.params.id, function (data) {
    res.redirect("/");
  })
});

// burger.delete("crwdhire", req.params.id, function (data) {
// Export routes for server.js to use.

module.exports = router;