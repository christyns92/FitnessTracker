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


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
    useNewUrlParser: true,
});

//requiring route files
app.use(require("./routes/apiRoutes.js"));

app.listen(PORT, () => {
    console.log("App running on port 3001!");
});
module.exports = db;