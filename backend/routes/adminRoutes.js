const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const adminController = require("../controller/adminController.js");
const { verifyToken, isAdmin } = require("../middleware.js");

//Admin dashboard

router.get("/dashboard",verifyToken,isAdmin , wrapAsync(adminController.showDashboard));

//show complaint

router.get("/complaints", verifyToken,isAdmin, adminController.showComplaints);

//update complaint status

router.put("/complaints/:id/status", verifyToken, isAdmin, wrapAsync(adminController.updateComplaint));

//delete complaints

router.delete("/complaint/:id", verifyToken,isAdmin, wrapAsync(adminController.deleteComplaint));

module.exports = router;