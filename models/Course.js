const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  // Add other course-related fields as needed
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
