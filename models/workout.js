const mongoose = require("mongoose");

const { Schema } = mongoose.Schema;

//this file is written based off the javascript in public folder, so it was quite easy to reverse engineer from that.

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: 'Enter type of exercise',
        },
        name: {
          type: String,
          trim: true,
          required: 'Enter name of exercise',
        },
        duration: {
          type: Number,
          trim: true,
          required: 'Enter exercise length in minutes',
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

workoutSchema.virtual('totalDuration').get(function() {
  return this.exercises.reduce(
    (total, exercise) => total + exercise.duration,
    0
  );
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;