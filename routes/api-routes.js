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
    db.Job.findAll({
      // where: {
      //   order: ['createdAt', 'DESC'],
      // },

      limit: 10
    }).then(function(results) {

      // var topTen = [];
      // if (results.length >= 10){
      //   for (var i = results.length-1; i >= results.length-10; i--) {
      //     topTen.push(results[i]);
      //   }
      // }
      // else {
      //   for (var i = results.length - 1; i >= results.length; i--) {
      //     topTen.push(results[i]);
      //   }
      // }

      // console.log("results: " , results);
      // res.render("search", { jobs: topTen });
      res.render("search", { jobs: results });
    });

  });

// Get route for returning posts of a specific job location
app.get("/all/ascending", function (req, res) {
  db.Job.findAll({
    where: {
      createdAt: ['createdAt', 'ASC']
    },
  }).then(function (results) {
    res.render("search", { jobs: results });
  });
});


  // Get route for returning posts of a specific job location
  app.get("/all/jobLocation/:jobLocation", function (req, res) {
    db.Job.findAll({
      where: {
        jobLocation: req.params.jobLocation,
        createdAt: ['createdAt', 'DESC']
      },
    }).then(function (results) {
      res.render("search", { jobs: results });
    });
  });

  // Get route for returning posts of a specific job category
  app.get("/all/jobCategory/:jobCategory", function(req, res) {
    db.Job.findAll({
      where: {
        jobCategory: req.params.jobCategory,
        createdAt: ['createdAt', 'DESC']
      },
    }).then(function(results) {
      res.render("search", { jobs: results });
    });
  });

  // Get route for returning posts of a specific job shcedule
    app.get("/all/jobTime/:jobTime", function(req, res) {
      db.Job.findAll({
        where: {
          jobTime: req.params.jobTime,
          createdAt: ['createdAt', 'DESC']
        },
      }).then(function(results) {
        res.render("search", { jobs: results });
      });
    });


    // Get route for returning posts of a specific job shcedule
    app.get("/all/category/:jobTime", function(req, res) {
      db.Job.findAll({
        where: {
          jobTime: req.params.jobTime,
          createdAt: ['createdAt', 'DESC']
        },
        limit: 10
      }).then(function(results) {
        res.render("search", { jobs: results });
      });
    });



      // Get route for returning posts of a specific job category
  app.get("/all/category/:jobCategory", function(req, res) {
    db.Job.findAll({
      where: {
        jobCategory: req.params.jobCategory
      },
    }).then(function(results) {
      res.render("search", { jobs: results });
    });
  });


  // Get route for retrieving a single ID
  app.get("/all/:id", function(req, res) {
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
      jobDescription: req.body.jobDescription,
      jobCategory: req.body.jobCategory,
      jobTime: req.body.jobTime,
      jobImage2: req.body.jobImage2,
      jobCompany: req.body.jobCompany,
      jobCategory: req.body.jobCategory,
      jobPay: req.body.jobPay,
      jobPhone: req.body.jobPhone,
      jobContact: req.body.jobContact,
      jobURL: req.body.jobURL,
      // jobPartTime: req.body.jobPartTime,
      // jobFullTime: req.body.jobFullTime,
      jobType: req.body.jobType,
      jobInputAddress: req.body.jobInputAddress,
      jobTagAddress: req.body.jobTagAddress,
      jobTagCity: req.body.jobTagCity,
      jobTagState: req.body.jobTagState,
      jobTagCounty: req.body.jobTagCounty,
      // jobUnknownTime: false
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