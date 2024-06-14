const Question = require("../models/question");

const addQuestions = async (req, res) => {
  try {
    const { questions } = req.body;

    const response = await Question.insertMany(questions);
    res.json({
      message: "Questions added successfully",
      questions: response,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", message: error });
  }
};

module.exports = addQuestions;
