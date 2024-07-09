const mongoose = require("mongoose");

const instanceSchema = new mongoose.Schema({
  testID: {
    type: String,
    required: true,
  },
  answersSelected: {
    type: Array,
  },
  score: {
    type: Number,
    default: 0,
  },
  finishTime: {
    type: Date,
  },
  status: {
    type: String,
    enum: ["Pending", "Completed"],
  },
  comments: {
    type: String,
  },
  totalMarks: {
    type: Number,
    required: true,
  },
});

const Instance = mongoose.model("Instance", instanceSchema);

module.exports = Instance;
