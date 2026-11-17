'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', (req, res) => {
//DONE: 1
  const radius = parseFloat(req.params.r)
  if (isNaN(radius)) {
    res.status(400).json({error: 'The radius must be a number'})
    return
  }
  const result = {
    area: Math.PI * Math.pow(radius, 2),
    circumference: Math.PI * 2 * radius
  }
  res.json(result);
});

//TODO2


//TODO3


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});