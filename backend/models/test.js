const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  class: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    enum: [
      "easy",
      "medium",
      "hard"
    ],
    required: true,
  },
  questionSet: {
    type: Array,
    required: true,
  },
  answers: {
    type: Array,
    required: true,
  },
  starttime: {
    type: Date,
    required: true,
  },
  endtime: {
    type: Date,
    required: true,
  },
  totalMarks: {
    type: Number,
    required: true
  }
});

const Test = mongoose.model("Test", testSchema);

module.exports = Test;
