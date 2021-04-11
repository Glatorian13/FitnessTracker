//Deps
const router = require('express').Router();
const db = require('../models/');

//routing and api's

//GET all
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

//add new
router.post('/api/workouts', ({ body }, res) => {
  db.Workout.create(body)
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

//PUT for update by id's