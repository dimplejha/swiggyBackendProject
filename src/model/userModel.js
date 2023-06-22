const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    enum: ['Mr', 'Mrs', 'Miss'],
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  mobile: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
    trim: true,
    enum: ['Male', 'Female', 'Other'],
  },
  DOB: {
    type: Date,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: Date,
  updatedAt: Date,
});

module.exports = mongoose.model('users', userSchema);
