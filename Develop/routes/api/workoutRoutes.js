const Workout = require("../models/Workout.js");
const mongoose = require("mongoose");
const path = require("path");
const express = require("express");
const router = require('express').Router();

// writing the route to get all workouts
router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then((workoutsdb) => {
            res.json(workoutsdb);
        })
        .catch((err) => {
            res.json(err);
        });
});

// create a new workout
router.post("/api/workouts", ({ body }, res) => {
    Workout.create({})
        .then((workoutsdb) => {
            res.json(workoutsdb);
        })
        .catch((err) => {
            res.json(err);
        });
});

// Add exercises
router.put("/api/workouts/:id", ({ params, body }, res) => {
    console.log("PARAMS", body, params);
});



module.exports = router;