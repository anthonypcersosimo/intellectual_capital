require("dotenv").config();

// const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express()
  // middlewares
  .use(express.urlencoded({ extended: true }))
  .use(express.json())

// start server
app.listen(PORT, () => {
  console.log(`🌎  ==> HTML/API server now on port ${PORT}!`);
});