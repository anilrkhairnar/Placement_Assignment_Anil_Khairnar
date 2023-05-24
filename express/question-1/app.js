const express = require("express");
const app = express();

// Endpoint: /post
app.get("/post", (req, res) => {
  // Simulated data for 20 posts
  const posts = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    title: `Post ${index + 1}`,
    body: `This is the body of post ${index + 1}`,
  }));

  // Send the posts as a response
  res.json(posts);
});

// Start the server
module.exports = app;
