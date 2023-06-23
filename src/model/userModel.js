const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
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
      lowercase: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
      trim: true,
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
    address: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: Date,
    updatedAt: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model('users', userSchema);
