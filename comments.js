// Create web server
// Create a new web server with the express module
const express = require('express');
const app = express();
const port = 3000;

// Create a new route that listens for GET requests to the /comments path
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start the server on port 3000
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

// Define an array of comments
const comments = [
  { username: 'Alice', comment: 'I love JavaScript!' },
  { username: 'Bob', comment: 'I love Python!' },
  { username: 'Charlie', comment: 'I love Ruby!' },
];
// Run the code in the terminal with the command node comments.js
// Open http://localhost:3000/comments in your web browser
// You should see the array of comments displayed as JSON
// [{"username":"Alice","comment":"I love JavaScript!"},{"username":"Bob","comment":"I love Python!"},{"username":"Charlie","comment":"I love Ruby!"}]
// To stop the server, press Ctrl + C in the terminal