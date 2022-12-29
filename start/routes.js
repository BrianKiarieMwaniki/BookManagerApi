const express = require("express");
const books = require("../routes/books");
const media = require("../routes/media");

module.exports = function (app) {
  app.use(express.json());

  app.use("/api/books", books);
  app.use("/api/media/uploads", media);
};
