const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const authController = require("../controller/authController.js");
const passport = require("passport");

//register POST

router.post("/register", wrapAsync(authController.signUp));

//login POST

router.post("/login", passport.authenticate('local', { session: false }),wrapAsync(authController.login));


module.exports = router;