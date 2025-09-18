const mongoose = require('mongoose');

// Course Schema
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  durationWeeks: {
    type: Number,
    required: true,
    min: 1,
  },
  instructor: {
    type: String,
    required: true,
    trim: true,
  },
});

// Student Schema
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
  },
  enrollmentDate: {
    type: Date,
    default: Date.now,
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
    },
  ],
});

// Compile models
const Course = mongoose.model('Course', courseSchema);
const Student = mongoose.model('Student', studentSchema);

module.exports = { Course, Student };