const express = require("express");
const app = express();
const path = require("path");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const bodyParser = require("body-parser");
//!Middleware functions are functions that have access to the request object ( req ), the response object ( res ),
//! and the next function in the application's request-response cycle. The next function is a function in the Express
//! router which, when invoked, executes the middleware succeeding the current middleware
//!allows us to add a midleware function, will be executed for every incoming request
//! next- is a function which will be passed here, has to be executed to allow the req to go on next middleware

//? it doesnt have to be a slash "/" but it have to start with a slash, thats why when we change to /example the same
//? data gets rendered, add it before the "/" middleware

//! adding a parser
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);

app.use(shopRoutes);

app.use(function (req, res, next) {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

//! the dirname points to the folder where the current file is

app.listen(3000);
