const User = require("../models/user.js");
const jwt = require("jsonwebtoken");

module.exports.signUp = async(req, res) =>{
    const { username, email, role, password } = req.body;

    const newUser = new User({
        username,
        email
    });

    const registeredUser = await User.register(newUser, password);

    const token = jwt.sign({
        id: registeredUser._id,
        username: registeredUser.username,
        role: registeredUser.role,
    },
    process.env.JWT_SECRET,
    {
        expiresIn: "7d",
    });

    res.json({
        message: "User registered successfully",
        token
    });
}

module.exports.login = async(req, res) =>{

    const token = jwt.sign({
        id: req.user._id,
        username: req.user.username,
        role: req.user.role,
    },
    process.env.JWT_SECRET,
    {
        expiresIn: "7d",
    });

    res.json({
        message: "User logged in successfully",
        token
    });
}