// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/all", function (req, res) {
    // console.log("this is our db Job: " , db);
    // Add sequelize code to find all posts, and return them to the user with res.json
    db.Job.findAll({}).then(function (results) {
      res.json(results);
    });

  });

  // GET route for getting all of the posts
  app.get("/search", function(req, res) {
    // console.log("this is our db Job: " , db);
    // Add sequelize code to find all posts, and return them to the user with res.json
    db.Job.findAll({}).then(function(results) {
      // console.log("results: " , results);
      res.render("search", { jobs: results });
    });

  });



  // Get route for returning posts of a specific category
  app.get("/all/category/:category", function(req, res) {
    // Add sequelize code to find all posts where the category is equal to req.params.category,
    // return the result to the user with res.json
    db.Job.findAll({
      where: {
        category: req.params.category
      },
    }).then(function(results) {
      res.json(results);
    });
  });

  // Get route for retrieving a single post
  app.get("/all/:id", function(req, res) {
    // Add sequelize code to find a single post where the id is equal to req.params.id,
    // return the result to the user with res.json
    db.Job.findAll({
      where: {
        id: req.params.id
      },
    }).then(function(results) {
      res.json(results);
    });

  });

  // POST route for saving a new post

  app.post("/jobs", function(req, res) {
    console.log("we hit /jobs route: ");

    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json

  //   db.Job.create(req.body).then(function (dbJob) {
  //     res.json(dbJob);
  //   });
  // });
    db.Job.create({
      jobTitle: req.body.jobTitle,
      jobLocation: "SLC",
      jobDescription: req.body.jobDescription,
      jobCompany: req.body.jobCompany,
      jobPay: req.body.jobPay,
      jobPhone: req.body.jobPhone,
      jobContact: req.body.jobContact,
      jobURL: req.body.jobURL,
      jobPartTime: req.body.jobPartTime,
      jobFullTime: req.body.jobFullTime,
      jobTye: req.body.jobType,
      jobUnknownTime: false
    }).then(function(results){
      res.json(results);
      // console.log("results" , results);
    });

  });

  // // DELETE route for deleting posts
  // app.delete("/api/posts/:id", function(req, res) {
  //   // Add sequelize code to delete a post where the id is equal to req.params.id, 
  //   // then return the result to the user using res.json
  //   db.Job.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(results){
  //       res.json(results);
  //     });

  // });

  // // PUT route for updating posts
  // app.put("/api/all", function(req, res) {
  //   // Add code here to update a post using the values in req.body, where the id is equal to
  //   // req.body.id and return the result to the user using res.json
  //   db.Job.update(req.body, {
  //     where: {
  //       id: req.body.id
  //     },
             
  //    })
  //    .then(function(results){
  //     res.json(results);
  //   });

  // });
};