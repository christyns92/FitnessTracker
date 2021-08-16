const Workout = require("../models/Workout.js");
const mongoose = require("mongoose");
const path = require("path");
const express = require("express");
const router = require('express').Router();

// writing the route to get all workouts
// route to get all workouts
router.get("/api/workouts", (req, res) => {
    Workout.aggregate([{
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration",
                },
            },
        }, ])
        .then((workoutsdb) => {
            res.json(workoutsdb);
        })
        .catch((err) => {
            res.json(err);
        });
});

// route to create new workout
router.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
        .then((workoutsdb) => {
            res.json(workoutsdb);
        })
        .catch((err) => {
            res.json(err);
        });
});



module.exports = router;