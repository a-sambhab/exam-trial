const Student = require("../models/student");
const jwt = require("jsonwebtoken");

const loginAsStudent = async (req, res) => {
  const { rollno, schoolcode, password } = req.body;
  const student = await Student.findOne({
    rollno: rollno,
    schoolcode: schoolcode,
  });
  if (!student) return res.status(400).send("Invalid rollno or schoolcode");
  const validPassword = await student.verifyPassword(password);
  if (!validPassword) return res.status(400).send("Invalid password");
  const token = jwt.sign({ rollno: student.rollno }, "exammoduletrial214541");
  res.send({
    token: token,
    schoolcode: student.schoolcode,
    name: student.studentname,
    schoolname: student.schoolname,
    standard: student.standard,
    testsAppeared: student.testsAppeared,
  });
};

module.exports = loginAsStudent;