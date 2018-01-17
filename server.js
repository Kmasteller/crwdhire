var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var port = process.env.PORT || 3000;

// Requiring our models for syncing
var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// var routes = require("./controllers/crwd_controller.js");
var routes = require("./config/sqlconnection.js");

// app.use("/", routes);


require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


// app.listen(port, function () {
//     console.log("we are running on port " + port)
// });

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function () {
    app.listen(port, function () {
        console.log("App listening on PORT " + port);
    });
});
