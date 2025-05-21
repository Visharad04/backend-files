const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Example route to create a new user
router.post('/', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Add more routes for reading, updating, and deleting users as needed

module.exports = router;
