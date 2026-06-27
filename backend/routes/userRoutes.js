const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const userController = require("../controller/userController.js");
const { verifyToken } = require("../middleware.js");

//Get my complaints

router.get("/mycomplaints",verifyToken, userController.myComplaints);

module.exports = router;