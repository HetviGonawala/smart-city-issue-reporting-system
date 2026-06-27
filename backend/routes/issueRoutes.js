const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const issueController = require("../controller/issueController.js");
const { verifyToken, isIssueOwner } = require("../middleware.js");
const multer  = require('multer');
const {storage} = require("../cloudconfig.js");
const upload = multer({ storage });

//POST create issue

router.post("/",verifyToken,upload.single('image'), wrapAsync(issueController.createIssue));

//Show Route

router.get("/:id", verifyToken, isIssueOwner, wrapAsync(issueController.showIssue));

//edit route

router.put("/:id",verifyToken,isIssueOwner,upload.single('image'), wrapAsync(issueController.updateIssue));

//Delete route

router.delete("/:id",verifyToken, isIssueOwner, wrapAsync(issueController.deleteIssue));

module.exports = router;