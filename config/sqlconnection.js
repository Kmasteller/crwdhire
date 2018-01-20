//OLD - not needed with Sequelize
// Setup SQL
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
      port: 3306,
      host: "localhost",
      user: "root",
      password: "Powell12",
      database: "crwdhire_db"
    });
}

// Make Connection
connection.connect(function (err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;