const express = require("express");
const path = require("path");
const router = require('express').Router();

//grabs index.html info
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
});
// grabs exercise.html info
router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "/exercise.html"));
});
//grabs stats.html info
router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "/stats.html"));
});

module.exports = router;