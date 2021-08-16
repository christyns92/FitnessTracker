const express = require("express");
const logger = require("morgan");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3001;


app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(require("./routes"));
app.listen(PORT, () => {
    console.log("App running on port 3001!");
});