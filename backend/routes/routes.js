const express = require("express");
const Login = require("../controllers/Login");
const Register = require("../controllers/Register");
const getUserAccess = require("../controllers/getUserAccess");
const addQuestions = require("../controllers/addQuestions");
const getQuestionsByTopic = require("../controllers/getQuestionsByTopic");
const addTest = require("../controllers/addTest");
const loginAsStudent = require("../controllers/loginAsStudent");
const registerStudent = require("../controllers/registerStudent");
const appearTest = require("../controllers/appearTest");

const router = express.Router();

router.post("/auth/login", Login);
router.post("/auth/register", Register);
router.get("/getuseraccess", getUserAccess);
router.post("/addquestions", addQuestions);
router.get("/getquestionbytopic", getQuestionsByTopic);
router.post("/addtest", addTest);
router.post("/auth/loginStudent", loginAsStudent);
router.post("/auth/registerStudent", registerStudent);
router.post("/appearTest", appearTest)

module.exports = router;
