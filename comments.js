// Create web server with express
const express = require('express');
const app = express();

// Import comments data
const comments = require('./comments.json');

// Create GET route
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start server
app.listen(4001, () => {
  console.log('Server listening on port 4001');
});