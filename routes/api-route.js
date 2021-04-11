//Deps
const router = require('express').Router();
const db = require('../models/');

//routing and api's

router.get('/api/workouts', (req, res) => {
  db.Workout.find({})
  .then(dbWorkout => {
    console.log(dbWorkout);
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});