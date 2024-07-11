const Instance = require("../models/instance");
const Student = require("../models/student");
const Test = require("../models/test");

const appearTest = async (req, res) => {
  const test = await Test.findOne({ _id: req.body.testId });
  const student = await Student.findOne({
    rollno: req.body.studentRollNo,
    schoolcode: req.body.schoolcode,
  });
  const newinstance = new Instance({
    testID: req.body.testId,
    startTime: new Date(),
    studentID: req.body.studentRollNo,
    schoolcode: req.body.schoolcode,
    status: "Pending",
    totalMarks: test.totalMarks
  });
  const savedInstance = await newinstance.save()
  const {answers: _, ...resttest} = test._doc
  res.send({
    test: resttest,
    instanceID: savedInstance._id
  })
};

module.exports = appearTest;
