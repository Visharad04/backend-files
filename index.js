const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware to parse JSON requests
app.use(express.json());

// Import routes
const userRoutes = require('./routes/userRoutes');
const complaintRoutes = require('./routes/complaintRoutes');

// Use routes
app.use('/users', userRoutes);
app.use('/complaints', complaintRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
