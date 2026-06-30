const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const authController = require("../controller/authController.js");
const passport = require("passport");

//register POST

router.post("/register", wrapAsync(authController.signUp));

//login POST

router.post("/login", async (req, res, next) =>{
    passport.authenticate("local", {session : false}, (err, user, info) =>{
        if(err) return next(err);

        if(!user){
            return res.status(401).json({
                message:"Invalid Username/Password",
            })
        }

        req.user = user;
        next();

    })(req, res,next);

}, wrapAsync(authController.login))


module.exports = router;