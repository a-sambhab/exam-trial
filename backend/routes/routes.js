const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const Login = require("../controllers/Login");
const Register = require("../controllers/Register");
const getUserAccess = require("../controllers/getUserAccess");

const router = express.Router();

router.post("/auth/login", Login)
router.post('/auth/register', Register)
router.get('/getuseraccess', getUserAccess)

module.exports = router;
