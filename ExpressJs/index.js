const express = require("express");

const app = express();
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

app.use("/", (req, res, next) => {
  next();
});

app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'/><button type='submit'>Add Product</button></form>"
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express</h1>");
});

app.listen(3000);
