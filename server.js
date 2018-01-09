// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const hdb = require("express-handlebars");
const routes = require('./controllers/controller');

// App Setup
// ======================================================
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded( { extended: true } ));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// Set Handlebars as the default templating engine
// =======================================================
app.engine("handlebars", hdb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routing
// =======================================================
app.use("/", routes);

// Start Server
// =======================================================
app.listen(PORT, function () {
    console.log("Server Listening on Port: " + PORT);
});