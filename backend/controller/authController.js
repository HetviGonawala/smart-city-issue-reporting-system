const User = require("../models/user.js");
const jwt = require("jsonwebtoken");

module.exports.signUp = async(req, res) =>{
    const { username, email, role, password } = req.body;

    const newUser = new User({
        username,
        email,
        role,
    });

    const registeredUser = await User.register(newUser, password);

    res.json({
        message: "User registered successfully"
    });
}

module.exports.login = async(req, res) =>{
    
     console.log("login",req.user);
     console.log("JWT_Token", process.env.JWT_SECRET)
    const token = jwt.sign({
        id: req.user._id,
        username: req.user.username,
        role: req.user.role,
    },
    process.env.JWT_SECRET,
    {
        expiresIn: "7d",
    }
);

    res.json({
        message: "User logged in successfully",
        token
    });
}