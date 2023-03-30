const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.get('/', (req, res) => {
    res.json({message: "Welcome to Luke's Fitness Tracker!"})
})

app.listen()

app.listen(PORT, () => {
  console.log(`Server now on port ${PORT}!`);
});