// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.render("index");
  });


  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/addform.html"));
  });

  app.get("/search", function (req, res) {
    db.Job.findAll({
      where: {
        createdAt: {
          $ne: null
        }
      },
      order: [
        [ 'createdAt', 'DESC']
      ],
      limit: 10
    }).then(function (results) {
      console.log("results: ", results);
      res.render("search", { jobs: results });
    });
  });

  app.get("/fulltime", function (req, res) {
    db.Job.findAll({
      where: {
        jobTime: 2
      },
      order: [
        [ 'createdAt', 'DESC']
      ],
      limit: 10
    }).then(function (results) {
      console.log("results: ", results);
      res.render("fulltime", { jobs: results });
    });
  });

  app.get("/parttime", function (req, res) {
    db.Job.findAll({
      where: {
        jobTime: 1
      },
      order: [
        [ 'createdAt', 'DESC']
      ],
      limit: 10
    }).then(function (results) {
      console.log("results: ", results);
      res.render("parttime", { jobs: results });
    });
  });

  app.get("/category", function (req, res) {
    db.Job.findAll({
      where: {
        jobCategory: req.params.jobCategory
      },
      order: [
        [ 'createdAt', 'DESC']
      ],
      limit: 10
    }).then(function (results) {
      console.log("results: ", results);
      res.render("parttime", { jobs: results });
    });
  });

  app.get("/oldest", function (req, res) {
    db.Job.findAll({
      where: {
        createdAt: {
          $ne: null
        }
      },
      order: [
        [ 'createdAt', 'ASC']
      ],
      limit: 10
    }).then(function (results) {
      console.log("results: ", results);
      res.render("oldest", { jobs: results });
    });
  });

  app.get("/newest", function (req, res) {
    db.Job.findAll({
      where: {
        createdAt: {
          $ne: null
        }
      },
      order: [
        [ 'createdAt', 'DESC']
      ],
      limit: 10
    }).then(function (results) {
      console.log("results: ", results);
      res.render("newest", { jobs: results });
    });
  });

  app.get("/search", function (req, res) {
    db.Job.findAll({
      where: {
        createdAt: {
          $ne: null
        }
      },
      order: [
        [ 'createdAt', 'DESC']
      ],
      limit: 10
    }).then(function (results) {
      console.log("results: ", results);
      res.render("search", { jobs: results });
    });
  });

  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/contact.handlebars"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("*", function (req, res, next) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//   // authors route loads author-manager.html
//   app.get("/authors", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/author-manager.html"));
//   });
};