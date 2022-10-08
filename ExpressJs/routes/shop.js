const path = require("path");

const express = require("express");
const rootDir = require("../util/path");
const shopRouter = express.Router();

shopRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = shopRouter;
