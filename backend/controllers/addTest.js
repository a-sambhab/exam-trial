const Test = require("../models/test");

const addTest = async (req, res) => {
  const newTest = new Test({
    class: req.body.class,
    topic: req.body.topic,
    difficulty: req.body.difficulty,
    questionset: req.body.questionset,
    answers: req.body.answers,
    starttime: new Date(req.body.starttime),
    endtime: new Date(req.body.endtime),
  });
  const response = await newTest.save();
  res.send({ message: "Test added successfully", id: response._id });
};

module.exports = addTest;
