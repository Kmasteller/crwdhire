// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");
var request = require("request")
var mongDB = require("../mongooseModels");
var cheerio = require("cheerio")

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

  app.get("/scrape", function(req, res) {
    console.log("should be hitting scrape")
    // First, we grab the body of the html with request
    request.get("https://utahbusiness.com/news/", function(err, response, html) {
      // Then, we load that into cheerio and save it to $ for a shorthand selector
      var $ = cheerio.load(html);
  
      // Now, we grab every h2 within an article tag, and do the following:
      $("h2").each(function(i, element) {
        // Save an empty result object
        var result = {};
  
        // Add the text and href of every link, and save them as properties of the result object
        result.title = $(element).children().text();
        result.link = $(element).children('a').attr("href");
        console.log(result);
        // Create a new Article using the `result` object built from scraping
        mongDB.Article
          .create(result)
          .then(function(dbArticle) {
            // If we were able to successfully scrape and save an Article, send a message to the client
           console.log(dbArticle);
          })
          .catch(function(err) {
            // If an error occurred, send it to the client
            res.json(err);
          });
      });
      res.send("Scrape Complete");
    });
  });
  
  // Route for getting all Articles from the db
  app.get("/articles", function(req, res) {
    // Grab every document in the Articles collection
    mongDB.Article
      .find({})
      .then(function(dbArticle) {
        // If we were able to successfully find Articles, send them back to the client
        res.json(dbArticle);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });
  
  // Route for grabbing a specific Article by id, populate it with it's note
  app.get("/articles/:id", function(req, res) {
    // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
    mongDB.Article
      .findOne({ _id: req.params.id })
      // ..and populate all of the notes associated with it
      .populate("note")
      .then(function(dbArticle) {
        // If we were able to successfully find an Article with the given id, send it back to the client
        res.json(dbArticle);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });
  
  // Route for saving/updating an Article's associated Note
  app.post("/articles/:id", function(req, res) {
    // Create a new note and pass the req.body to the entry
    mongDB.Note
      .create(req.body)
      .then(function(dbNote) {
        // If a Note was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
        // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
        // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
        return db.Article.findOneAndUpdate({ _id: req.params.id }, {$push: { note: dbNote._id }}, { new: true });
      })
      .then(function(dbArticle) {
        // If we were able to successfully update an Article, send it back to the client
        res.json(dbArticle);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
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