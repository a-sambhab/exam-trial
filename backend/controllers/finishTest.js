const Test = require("../models/test");
const Instance = require("../models/instance");

const finishTest = async (req, res) => {
    const instance = await Instance.findOne({_id: req.body.instanceID})
    const test = await Test.findOne({_id: instance.testID})
    instance.finishTime = new Date();
    instance.status = "Completed"
    instance.answersSelected = req.body.answers
    for (const answer in req.body.answers) {
        // if()
    }
};

module.exports = finishTest;
