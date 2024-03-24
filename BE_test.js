const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3001;
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Post = mongoose.model('Post', {
  title: String,
  description: String,
});

app.use(bodyParser.json());

// API endpoint to fetch all posts
app.get('/api/posts', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// API endpoint to add a new post
app.post('/api/posts', async (req, res) => {
  const { title, description } = req.body;
  const post = new Post({ title, description });
  await post.save();
  res.json(post);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
