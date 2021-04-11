//Deps
const router = require('express').Router();
const db = require('../models/');
const lastRange = 7

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
router.put('/api/workouts/:id', (req, res) => {
  db.Workout.updateOne(
    { _id: req.params.id },
    { $push: { exercises: req.body } }
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

//GET last 7 workouts (configurable with lastRange variable)
router.get('/api/workouts/range', (req, res) => {
  db.Workout.find({})
  .sort({ _id: -1 })
  .limit(lastRange)
  .then(dbWorkout => {
    console.log(dbWorkout);
    res.json(dbWorkout);
    console.log(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});

module.exports = router;