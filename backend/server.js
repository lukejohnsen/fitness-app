require('dotenv').config();
const express = require('express');
const workoutRoutes = require('./routes/workouts');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.use ((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api/workouts', workoutRoutes);

app.listen(PORT, () => {
  console.log(`Server now on port ${PORT}!`);
});