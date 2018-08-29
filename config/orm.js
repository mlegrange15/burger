// Import MySQL connection.
var connection = require("../config/connection.js");


var orm = {
    selectAll: function(cb) {
      var queryString = "SELECT * FROM burgers";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },

    insertOne: function(val, cb) {
      var queryString = "INSERT INTO burgers (burger_name) VALUES (" + val.toString() + ") ";
  
      console.log(queryString);
  
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },

    updateOne: function(val, cb) {
      var queryString = "UPDATE burgers SET devoured = true WHERE burger_name = " + val.toString();
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
  };


// Export the orm object for the model (cat.js).
module.exports = orm;