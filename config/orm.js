// Import MySQL connection.
var connection = require('./connection.js');
var express = require('express');

// Object for all our SQL statement functions.
var orm = {
  all: function(cb) {
    var queryString = "SELECT * FROM jobs";
    connection.query(queryString, function(err, res) {
      if(err) {
        throw err;
      }
      cb(res);
    });
  },

  // Create function
  create: function(crwdhire_name, cb){
    var queryString = 'INSERT INTO jobs SET ?';
    connection.query(queryString, {
      crwdhire_name: crwdhire_name,
      devoured: false
    }, function(err, res) {
      if(err) {
        throw err;
      }
      cb(res);
    });
  },


//  update function
  update: function(crwdhireID, cb) {
    var queryString = "UPDATE jobs SET ? WHERE ?";
    // console.log(queryString);
    connection.query(queryString, [{devoured: true}, {id: crwdhireID}], function(err, res) {
      if(err) {
        throw err;
      }
      cb(res);
    });
  },

//   delete: function(crwdhireID, cb) {
//     var queryString = "DELETE FROM jobs SET ? WHERE ?";
//     console.log(queryString);
//     connection.query(queryString, [{devoured: true}, {id: crwdhireID}], function(err, res) {
//       if(err) {
//         throw err;
//       }
//       cb(res);
//     });
//   }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
