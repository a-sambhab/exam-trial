const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  option: {
    type: Array,
    required: true,
  },
  media: {
    type: Array,
  },
  answer: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  }
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;