const Questions = require("../models/question");

const getQuestionsByTopic = async (req, res) => {
  const questions = await Questions.aggregate([
    { $match: { topic: req.query.topic, class: req.query.class } },
    { $sample: { size: Number(req.query.qno) } },
  ]);
  if (questions.length > 0) {
    res.json({message: `Questions of ${req.query.topic} for class ${req.query.class}`, questions: questions})
  } else {
    res.status(200).send({message: `No questions found for topic ${req.query.topic}`});
    
  }
};

module.exports = getQuestionsByTopic;
