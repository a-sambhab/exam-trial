const User = require("../models/user");
const bcrypt = require("bcrypt")
const Register = async (req, res) => {
    try{
        const {username, password, access} = req.body;

        const existingUser = await User.findOne({username});
        if(existingUser) {
            return res.status(400).json({error: "Username already exists."})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            username, 
            password: hashedPassword,
            access: access
        });

        const savedUser = await user.save();
        res.json({
            message: "User registered successfully",
            userID: savedUser._id,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Internal Server Error"})
    }
};

module.exports = Register;
