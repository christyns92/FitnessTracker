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


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutsdb", {
    useNewUrlParser: true,
});

app.use(require("./routes/api-routes.js"));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/exercise.html"));
});

app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/stats.html"));
});

app.listen(PORT, () => {
    console.log("App running on port 3001!");
});