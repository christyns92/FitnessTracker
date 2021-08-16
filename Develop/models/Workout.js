const { model, Schema } = require("mongoose");
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [{
        type: { type: String, required: true },
        name: { type: String, required: true },
        duration: { type: Number, required: true },
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number
    }]
})

module.exports = model("Workout", WorkoutSchema);