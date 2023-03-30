const express = require('express');

const router = express.Router();

// GET all
router.get('/', (req, res) => {
    res.json({message: 'GET all workouts'});
});

// GET single
router.get('/:id', (req, res) => {
    res.json({message: 'GET a single workout'})
});

// Create new workout
router.post('/', (req, res) => {
    res.json({message: 'Create a new workout'})
});

// Delete a workout
router.delete('/:id', (req, res) => {
    res.json({message: 'Delete a workout'})
});

// Update new workout
router.patch('/:id', (req, res) => {
    res.json({message: 'Update a workout'})
});

module.exports = router;