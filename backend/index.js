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

//DONE: 2
app.get('/math/rectangle/:width/:height', (req, res) => {
  const width = parseFloat(req.params.width)
  const height = parseFloat(req.params.height)
  if (isNaN(width) || isNaN(height)) {
    res.status(400).json({error: 'The width and height must be numbers'})
    return
  }
  const result = {
    area: width*height,
    circumference: 2*width + 2*height
  }
  res.json(result)
})


//TODO3


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});