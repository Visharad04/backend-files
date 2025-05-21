// models/Complaint.js
const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  status: { type: String, default: 'open', enum: ['open', 'in progress', 'resolved'] },
  imageUrl: { type: String, default: '' },
  timestamp: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

// Create and export the Complaint model
module.exports = mongoose.model('Complaint', complaintSchema);
