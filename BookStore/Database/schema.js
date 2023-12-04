const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true, // Trim leading/trailing whitespaces
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  summary: {
    type: String,

    
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model('Book', bookSchema);
