const Student = require("../models/student");
const bcrypt = require("bcrypt");

const registerStudent = async (req, res) => {
  try {
    const existingStudent = await Student.findOne({
      rollno: req.body.rollno,
      schoolcode: req.body.schoolcode,
    });
    if (existingStudent) {
      return res.status(400).json({ error: "Student already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const student = new Student({
      rollno: req.body.rollno,
      schoolcode: req.body.schoolcode,
      studentname: req.body.studentname,
      password: hashedPassword,
      schoolname: req.body.schoolname,
      standard: req.body.standard,
      testsAppeared: [],
    });

    const savedUser = await student.save();
    res.json({
      message: "Student Registered Successfully",
      studentid: savedUser._id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = registerStudent;
