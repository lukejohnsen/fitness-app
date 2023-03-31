const express = require('express');
const {
    createWorkout,
    getAllWorkouts,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController');

const router = express.Router();

// GET all
router.get('/', getAllWorkouts);

// GET single
router.get('/:id', getSingleWorkout);

// Create new workout
router.post('/', createWorkout);

// Delete a workout
router.delete('/:id', deleteWorkout)

// Update new workout
router.patch('/:id', updateWorkout)

module.exports = router;