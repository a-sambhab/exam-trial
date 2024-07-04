const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const studentSchema = new mongoose.Schema({
  rollno: {
    type: String,
    unique: true,
    required: true,
  },
  schoolcode: {
    type: String,
    required: true,
  },
  studentname: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  schoolname: {
    type: String,
    required: true,
  },
  standard: {
    type: String,
    required: true,
  },
  testsAppeared: {
    type: Array,
  },
  upcomingTests: {
    type: Array
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

studentSchema.methods.verifyPassword = async function (password) {
  const user = this;
  const isMatch = await bcrypt.compare(password, user.password);
  return isMatch;
};

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
